export declare const theme: {
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
export declare type ColorMode = "light" | "dark";
/**
 * Get corresponding theme.
 * @param mode color theme type
 */
export default function getTheme(
  mode?: ColorMode
): {
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
} & {
  container: {
    borderColor: string;
  };
  error: {
    background: string;
    color: string;
  };
  console: {
    background: string;
  };
  divider: {
    background: string;
  };
  editor: {
    backgroundColor: string;
    color: string;
  };
  tabs: {
    tabHeader: {
      background: string;
      color: string;
      borderBottom: string;
    };
  };
};
