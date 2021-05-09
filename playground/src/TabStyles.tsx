import { styled } from "goober";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import media from "./utils/media";

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 200px;
  min-height: 350px;
  background: #252530;

  ${media.phone} {
    min-width: 100% !important;
    min-height: 100%;
  }
`;

export const StyledTabList = styled(TabList)`
  background-color: #252530;
`;

export const StyledTab = styled(Tab)`
  border: none;
  padding: 8px 5px;
  color: gray;

  &[data-selected] {
    color: lightgray;
  }
`;

export const StyledTabPanels = styled(TabPanels)`
  flex: 1 1 0%;
`;

export const StyledTabPanel = styled(TabPanel)`
  height: 100%;
  width: 100%;
`;
