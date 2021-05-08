import React, { useMemo, useEffect, useState } from "react";

import {
  StyledTabList,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
  StyledTabs,
} from "../TabStyles";
import { ISnippet, ITabConfig, IResultTabs } from "../types";
import Console from "./Console";
import Frame from "./Frame";

type Props = {
  id: string | number;
  snippet: ISnippet;
  defaultTab: IResultTabs;
  transformJs: boolean;
  presets: string[];
  width: number;
};

export default function Result(props: Props) {
  const [logs, setLogs] = useState<unknown[]>([]);
  const tabs: Readonly<ITabConfig<IResultTabs>[]> = useMemo(
    () => [
      { name: "Result", value: "result" },
      { name: "Console", value: "console" },
    ],
    []
  );
  useEffect(() => {
    function waitForMessage() {
      if (typeof window !== "undefined") {
        window.addEventListener("message", (data) => {
          if (
            data.data.source === `frame-${props.id}` &&
            data.data.message.type === "log"
          ) {
            setLogs((prevLogs) => [...prevLogs, ...data.data.message.data]);
          }
        });
      }
    }
    waitForMessage();
  }, [props.id]);

  return (
    <StyledTabs
      defaultIndex={tabs.findIndex((tab) => tab.value === props.defaultTab)}
      style={{ width: props.width }}
    >
      <StyledTabList>
        {tabs.map((tab) => (
          <StyledTab key={tab.value}>{tab.name}</StyledTab>
        ))}
      </StyledTabList>
      <StyledTabPanels>
        <StyledTabPanel>
          <Frame
            id={props.id}
            snippet={props.snippet}
            transformJs={props.transformJs}
            presets={props.presets}
          />
        </StyledTabPanel>
        <StyledTabPanel>
          <Console logs={logs} />
        </StyledTabPanel>
      </StyledTabPanels>
    </StyledTabs>
  );
}
