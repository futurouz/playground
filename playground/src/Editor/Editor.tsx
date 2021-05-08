import React, { useMemo } from "react";
import { IEditorTabs, ISnippet } from "../types";
import EditorSetup from "./EditorSetup";
import { ITabConfig } from "../types";
import {
  StyledTabs,
  StyledTabList,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
} from "../TabStyles";

type Props = {
  width: number;
  code: ISnippet;
  defaultTab: IEditorTabs;
  onChange: (changed: string, type: IEditorTabs) => void;
};

export default function Editor({ code, defaultTab, onChange, width }: Props) {
  const tabs: Readonly<ITabConfig<IEditorTabs>[]> = useMemo(
    () => [
      { name: "HTML", value: "markup" },
      { name: "CSS", value: "css" },
      { name: "JS", value: "javascript" },
    ],
    []
  );

  return (
    <StyledTabs
      defaultIndex={tabs.findIndex((tab) => tab.value === defaultTab)}
      style={{ width: width }}
    >
      <StyledTabList>
        {tabs.map((tab) => (
          <StyledTab key={tab.value}>{tab.name}</StyledTab>
        ))}
      </StyledTabList>
      <StyledTabPanels>
        {tabs.map((tab) => (
          <StyledTabPanel key={tab.value}>
            <EditorSetup
              code={code[tab.value]}
              onChange={onChange}
              language={tab.value}
            />
          </StyledTabPanel>
        ))}
      </StyledTabPanels>
    </StyledTabs>
  );
}
