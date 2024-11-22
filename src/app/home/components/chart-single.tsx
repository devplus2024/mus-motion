"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Toaster, toast } from "sonner";
import { ToastAction } from "@/components/ui/toast";
import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with a label";

const chartData = [
  { month: "January", desktop: 100, mobile: 40 },
  { month: "February", desktop: 300, mobile: 130 },
  { month: "March", desktop: 300, mobile: 190 },
  { month: "April", desktop: 450, mobile: 230 },
  { month: "May", desktop: 420, mobile: 290 },
  { month: "June", desktop: 540, mobile: 320 },
  { month: "July", desktop: 520, mobile: 430 },
  { month: "August", desktop: 590, mobile: 470 },
  { month: "September", desktop: 650, mobile: 558 },
  { month: "October", desktop: 600, mobile: 730 },
  { month: "November", desktop: 780, mobile: 860 },
  { month: "December", desktop: 990, mobile: 940 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-bar-web))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-bar-web))",
  },
} satisfies ChartConfig;

export function ChartSingle() {
  return (
    <Card className="border-none dark:bg-black">
      <CardHeader className="hidden rounded-md border">
        <CardTitle>Line Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <ChartContainer className="aspect-auto h-[250px]" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 30,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#15eb99" stop-opacity="0.09" />{" "}
                {/* Màu đỏ ở 0% */}
                <stop offset="50%" stopColor="#159deb" />{" "}
                {/* Màu xanh ở 100% */}
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <YAxis tickMargin={8} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey="desktop"
              type="linear"
              //   stroke="var(--color-desktop)"
              stroke="url(#lineGradient)"
              strokeWidth={2}
              dot={false}
              //   dot={{
              //     fill: "var(--color-desktop)",
              //   }}
              //   activeDot={{
              //     r: 6,
              //   }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
            {/* <Line
              dataKey="mobile"
              type="linear"
              //   stroke="var(--color-desktop)"
              stroke="url(#lineGradient)"
              strokeWidth={2}
              dot={false}
              //   dot={{
              //     fill: "var(--color-desktop)",
              //   }}
              //   activeDot={{
              //     r: 6,
              //   }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line> */}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex  justify-between gap-2 rounded-md border py-4 pl-6 text-sm">
        <div className="flex flex-col gap-2 justify-center">
		<div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
		</div>
		<div>
		 <Button
      variant="outline"
      onClick={() => {
	  console.log("Toast is Active")
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Download Chart
    </Button>
		</div>
      </CardFooter>
    </Card>
  );
}
