import { styled } from "goober";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import media from "./utils/media";

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: ${(props) => props.theme.container.minWidth};
  background-color: white;

  ${media.phone} {
    width: 100% !important;
  }
`;

export const StyledTabList = styled(TabList)`
  background-color: #4b4b5c;
`;

export const StyledTab = styled(Tab)`
  border: none;
  padding: 0.8em 0.5em;
  color: ${(props) => props.theme.tabs.tabHeader.color};

  &[data-selected] {
    border-bottom: 4px solid white;
  }
`;

export const StyledTabPanels = styled(TabPanels)`
  flex: 1;

  ${media.phone} {
    height: ${(props) => props.theme.tabs.tabPanel.phoneHeight};
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  height: 100%;
`;
