"use client";

import { useComposedRefs } from "../lib/composition";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import * as ReactDOM from "react-dom";

const ROOT_NAME = "MasonryRoot";
const ITEM_NAME = "MasonryItem";

const DATA_LINE_BREAK_ATTR = "data-masonry-line-break";
const DATA_ITEM_ATTR = "data-masonry-item";

const COLUMN_COUNT = 4;
const GAP = 12;
const CACHE_MAX_AGE = 5000;

const MASONRY_ERROR = {
  [ROOT_NAME]: `\`${ROOT_NAME}\` components must be within \`${ROOT_NAME}\``,
  [ITEM_NAME]: `\`${ITEM_NAME}\` must be within \`${ROOT_NAME}\``,
} as const;

const TAILWIND_BREAKPOINTS = {
  initial: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type TailwindBreakpoint = keyof typeof TAILWIND_BREAKPOINTS;
type BreakpointValue = TailwindBreakpoint | number;
type ResponsiveObject = Partial<Record<BreakpointValue, number>>;
type ResponsiveValue = number | ResponsiveObject;

function parseBreakpoint(breakpoint: BreakpointValue): number {
  if (typeof breakpoint === "number") return breakpoint;
  return breakpoint in TAILWIND_BREAKPOINTS
    ? TAILWIND_BREAKPOINTS[breakpoint]
    : Number(breakpoint);
}

function getInitialValue(value: ResponsiveValue, defaultValue: number): number {
  if (typeof value === "number") return value;
  if ("initial" in value) return value.initial ?? defaultValue;

  const breakpoints = Object.entries(value)
    .map(([key, val]) => ({
      breakpoint: parseBreakpoint(key as BreakpointValue),
      value: val ?? defaultValue,
    }))
    .sort((a, b) => a.breakpoint - b.breakpoint);

  return breakpoints[0]?.value ?? defaultValue;
}

function useResponsiveValue({
  value,
  defaultValue,
  mounted,
}: {
  value: ResponsiveValue;
  defaultValue: number;
  mounted: boolean;
}): number {
  const initialValue = React.useMemo(
    () => getInitialValue(value, defaultValue),
    [value, defaultValue],
  );
  const [currentValue, setCurrentValue] = React.useState(initialValue);

  const onResize = React.useCallback(() => {
    if (!mounted) return;
    if (typeof value === "number") {
      setCurrentValue(value);
      return;
    }

    const width = window.innerWidth;
    const breakpoints = Object.entries(value)
      .map(([key, val]) => ({
        breakpoint:
          key === "initial" ? 0 : parseBreakpoint(key as BreakpointValue),
        value: val ?? defaultValue,
      }))
      .sort((a, b) => b.breakpoint - a.breakpoint);

    const newValue =
      breakpoints.find(({ breakpoint }) => width >= breakpoint)?.value ??
      defaultValue;
    setCurrentValue(newValue);
  }, [value, defaultValue, mounted]);

  React.useEffect(() => {
    if (!mounted) return;

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize, mounted]);

  return currentValue;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

interface MasonryContextValue {
  mounted: boolean;
}

const MasonryContext = React.createContext<MasonryContextValue | null>(null);
MasonryContext.displayName = ROOT_NAME;

function useMasonryContext(name: keyof typeof MASONRY_ERROR) {
  const context = React.useContext(MasonryContext);
  if (!context) {
    throw new Error(MASONRY_ERROR[name]);
  }
  return context;
}

type ItemElement = React.ComponentRef<typeof MasonryItem>;

interface ItemMeasurement {
  height: number;
  width: number;
  marginTop: number;
  marginBottom: number;
}

interface ItemCache {
  measurements: Map<ItemElement, ItemMeasurement>;
  lastUpdate: number;
  timestamps: Map<ItemElement, number>;
}

interface MasonryProps extends React.ComponentPropsWithoutRef<"div"> {
  columnCount?: ResponsiveValue;
  defaultColumnCount?: number;
  gap?: ResponsiveValue;
  defaultGap?: number;
  linear?: boolean;
  asChild?: boolean;
}

const Masonry = React.forwardRef<HTMLDivElement, MasonryProps>(
  (props, forwardedRef) => {
    const {
      children,
      columnCount = COLUMN_COUNT,
      defaultColumnCount = columnCount,
      gap = GAP,
      defaultGap = gap,
      linear = false,
      asChild,
      className,
      style,
      ...rootProps
    } = props;
    const [maxColumnHeight, setMaxColumnHeight] = React.useState<number | null>(
      null,
    );
    const resizeObserverRef = React.useRef<ResizeObserver | null>(null);
    const rafIdRef = React.useRef<number | null>(null);
    const itemCacheRef = React.useRef<ItemCache>({
      measurements: new Map(),
      lastUpdate: 0,
      timestamps: new Map(),
    });
    const collectionRef = React.useRef<HTMLDivElement>(null);
    const composedRef = useComposedRefs(forwardedRef, collectionRef);

    const [mounted, setMounted] = React.useState(false);
    React.useLayoutEffect(() => {
      setMounted(true);
    }, []);

    const currentColumnCount = useResponsiveValue({
      value: columnCount,
      defaultValue: COLUMN_COUNT,
      mounted,
    });
    const currentGap = useResponsiveValue({
      value: gap,
      defaultValue: GAP,
      mounted,
    });
    const lineBreakCount = currentColumnCount > 0 ? currentColumnCount - 1 : 0;

    const getMeasurements = React.useCallback(
      (item: ItemElement): ItemMeasurement | null => {
        const cached = itemCacheRef.current.measurements.get(item);
        const timestamp = itemCacheRef.current.timestamps.get(item);
        const now = Date.now();

        if (cached && timestamp && now - timestamp < CACHE_MAX_AGE) {
          return cached;
        }

        const itemStyle = window.getComputedStyle(item);
        const marginTop =
          Number.parseFloat(itemStyle.marginTop) || currentGap / 2;
        const marginBottom =
          Number.parseFloat(itemStyle.marginBottom) || currentGap / 2;
        const height = item.offsetHeight + marginTop + marginBottom;
        const width = item.offsetWidth;

        if (
          height === 0 ||
          Array.from(item.getElementsByTagName("img")).some(
            (img) => img.clientHeight === 0,
          )
        ) {
          return null;
        }

        const measurements = { height, width, marginTop, marginBottom };
        itemCacheRef.current.measurements.set(item, measurements);
        itemCacheRef.current.timestamps.set(item, now);
        itemCacheRef.current.lastUpdate = now;

        return measurements;
      },
      [currentGap],
    );

    const invalidateCache = React.useCallback(() => {
      itemCacheRef.current.measurements.clear();
      itemCacheRef.current.timestamps.clear();
      itemCacheRef.current.lastUpdate = Date.now();
    }, []);

    const calculateLayout = React.useCallback(() => {
      if (!collectionRef.current || !mounted) return;

      const items = Array.from(
        collectionRef.current.querySelectorAll<ItemElement>(
          `[${DATA_ITEM_ATTR}]`,
        ),
      );

      const columnHeights = new Array(currentColumnCount).fill(0);
      let skip = false;
      let nextOrder = 1;

      for (const item of items) {
        if (item.dataset[DATA_LINE_BREAK_ATTR] === "") continue;
        const styles: Partial<CSSStyleDeclaration> = {
          position: "",
          top: "",
          left: "",
          // width: `calc(${100 / currentColumnCount}% - ${(currentGap * (currentColumnCount - 1)) / currentColumnCount}px)`,
          margin: `${currentGap / 2}px`,
        };
        Object.assign(item.style, styles);
      }

      for (const item of items) {
        if (item.dataset[DATA_LINE_BREAK_ATTR] === "" || skip) continue;

        const itemMeasurement = getMeasurements(item);
        if (!itemMeasurement) {
          skip = true;
          continue;
        }

        if (linear) {
          const yPos = columnHeights[nextOrder - 1];
          Object.assign(item.style, {
            position: "absolute",
            top: `${yPos}px`,
            left: `${(nextOrder - 1) * (itemMeasurement.width + currentGap)}px`,
          });

          columnHeights[nextOrder - 1] = yPos + itemMeasurement.height;
          nextOrder = (nextOrder % currentColumnCount) + 1;
        } else {
          const minColumnIndex = columnHeights.indexOf(
            Math.min(...columnHeights),
          );
          const xPos = minColumnIndex * (itemMeasurement.width + currentGap);
          const yPos = columnHeights[minColumnIndex];

          Object.assign(item.style, {
            position: "absolute",
            top: `${yPos}px`,
            left: `${xPos}px`,
          });

          columnHeights[minColumnIndex] = yPos + itemMeasurement.height;
        }
      }

      if (!skip) {
        /**
         * Use flushSync to prevent layout thrashing during React 18 batching
         * @see https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
         */
        ReactDOM.flushSync(() => {
          const maxHeight = Math.max(...columnHeights);
          setMaxColumnHeight(maxHeight > 0 ? maxHeight : null);
        });
      }
    }, [currentColumnCount, currentGap, linear, mounted, getMeasurements]);

    useIsomorphicLayoutEffect(() => {
      if (typeof ResizeObserver === "undefined") return;

      const cleanupResizeObserver = () => {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
        }
      };

      resizeObserverRef.current = new ResizeObserver(() => {
        invalidateCache();
        rafIdRef.current = requestAnimationFrame(calculateLayout);
      });

      const content = collectionRef.current;
      if (content) {
        resizeObserverRef.current.observe(content);
        for (const child of Array.from(content.children)) {
          resizeObserverRef.current.observe(child);
        }
      }

      return cleanupResizeObserver;
    }, [calculateLayout, invalidateCache]);

    const initialGridStyle = React.useMemo(
      () => ({
        display: mounted ? "block" : "grid",
        gridTemplateColumns: !mounted
          ? `repeat(${getInitialValue(defaultColumnCount, 4)}, 1fr)`
          : undefined,
        gap: !mounted ? `${getInitialValue(defaultGap, 16)}px` : undefined,
      }),
      [mounted, defaultColumnCount, defaultGap],
    );

    const containerStyle = React.useMemo(
      () => ({
        ...style,
        ...initialGridStyle,
        height: mounted && maxColumnHeight ? `${maxColumnHeight}px` : "auto",
        minHeight: "0px",
        // width: mounted ? `calc(100% - ${currentGap}px)` : "100%",
        marginLeft: mounted ? `${currentGap / 2}px` : undefined,
        marginRight: mounted ? `${currentGap / 2}px` : undefined,
      }),
      [style, initialGridStyle, mounted, maxColumnHeight, currentGap],
    );

    const contextValue = React.useMemo(() => ({ mounted }), [mounted]);

    const RootSlot = asChild ? Slot : "div";

    return (
      <MasonryContext.Provider value={contextValue}>
        <RootSlot
          {...rootProps}
          ref={composedRef}
          className={cn("relative mx-auto w-full", className)}
          style={containerStyle}
        >
          {children}
          <LineBreaks
            lineBreakCount={lineBreakCount}
            currentColumnCount={currentColumnCount}
          />
        </RootSlot>
      </MasonryContext.Provider>
    );
  },
);

Masonry.displayName = ROOT_NAME;

interface LineBreaksProps {
  lineBreakCount: number;
  currentColumnCount: number;
}

const LineBreaks = React.memo(
  function LineBreaks({ lineBreakCount, currentColumnCount }: LineBreaksProps) {
    return (
      <>
        {Array.from({ length: lineBreakCount }, (_, i) => {
          const key = `line-break-${currentColumnCount}-${i}`;
          return (
            <span
              key={key}
              {...{ [DATA_LINE_BREAK_ATTR]: "" }}
              style={{
                flexBasis: "100%",
                width: 0,
                margin: 0,
                padding: 0,
                order: i + 1,
              }}
            />
          );
        })}
      </>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.lineBreakCount === nextProps.lineBreakCount;
  },
);

interface MasonryItemProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
  fallback?: React.ReactNode;
}

const MasonryItem = React.forwardRef<HTMLDivElement, MasonryItemProps>(
  (props, forwardedRef) => {
    const { asChild, fallback, ...itemProps } = props;
    const context = useMasonryContext(ITEM_NAME);

    if (!context.mounted && fallback) {
      return fallback;
    }

    const ItemSlot = asChild ? Slot : "div";

    return (
      <ItemSlot
        {...{ [DATA_ITEM_ATTR]: "" }}
        {...itemProps}
        ref={forwardedRef}
      />
    );
  },
);

MasonryItem.displayName = ITEM_NAME;

const Root = Masonry;
const Item = MasonryItem;

export {
  Masonry,
  MasonryItem,
  //
  Root,
  Item,
};
