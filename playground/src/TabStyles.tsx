import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import media from "./utils/media";

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 200px;
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
  color: white;

  &[data-selected] {
    border-bottom: 4px solid white;
  }
`;

export const StyledTabPanels = styled(TabPanels)`
  flex: 1;
`;

export const StyledTabPanel = styled(TabPanel)`
  height: 100%;
`;
