// TabsComponent.tsx
import React from "react";
import { Button, Spacer, Tabs, useTabs } from "@geist-ui/core"; // Adjust imports based on your library

const TabsComponent = () => {
  const { setState, bindings } = useTabs("1");

  return (
    <>
      <Spacer h={0.5} />
      <Tabs {...bindings}>
        <Tabs.Item label="stateless" value="1">
          HTTP is stateless, but not sessionless.
        </Tabs.Item>
        <Tabs.Item label="extensible" value="2">
          Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend
          and experiment with.
        </Tabs.Item>
      </Tabs>
    </>
  );
};

export default TabsComponent;
