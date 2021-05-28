import React, { FC, useMemo } from "react";
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

interface IProps {
  width: number;
  code: ISnippet;
  defaultTab: IEditorTabs;
  excludeEditorTabs?: IEditorTabs[];
  onChange: (changed: string, type: IEditorTabs) => void;
}

const Editor: FC<IProps> = ({
  code,
  defaultTab,
  excludeEditorTabs,
  onChange,
  width,
}) => {
  const tabs: Readonly<ITabConfig<IEditorTabs>[]> = useMemo(() => {
    const defaultTabs = [
      { name: "HTML", value: "markup" as IEditorTabs },
      { name: "CSS", value: "css" as IEditorTabs },
      { name: "JS", value: "javascript" as IEditorTabs },
    ];

    return defaultTabs.filter((tab) =>
      excludeEditorTabs.find((name) => name !== tab.value)
    );
  }, [excludeEditorTabs]);
  ``;
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
};

export default Editor;
