import { theme } from "./theme";
export declare type DefaultTheme = typeof theme;
export declare const useTheme: () => {
  container: {
    borderColor: string;
    minHeight: string;
    minWidth: string;
  };
  error: {
    background: string;
    color: string;
  };
  console: {
    background: string;
  };
  divider: {
    width: number;
    background: string;
  };
  editor: {
    fontFamily: string;
    backgroundColor: string;
    color: string;
  };
  tabs: {
    tabHeader: {
      borderBottom: string;
      panelBackground: string;
      background: string;
      color: string;
    };
    tabPanel: {
      phoneHeight: string;
    };
    selectedTab: {
      background: string;
      borderBottom: string;
    };
  };
};
export declare function ThemeProvider({
  mode,
  userTheme,
  children,
}: {
  mode: any;
  userTheme: any;
  children: any;
}): JSX.Element;
