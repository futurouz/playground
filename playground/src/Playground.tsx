import React, { FC, useState, createElement } from "react";
import { useId } from "@reach/auto-id";
import { setup, DefaultTheme } from "goober";

import Editor from "./Editor";
import Result from "./Result";
import { ISnippet, IEditorTabs, IResultTabs } from "./types";
import { ThemeProvider, useTheme } from "./utils/ThemeProvider";
import { ColorMode } from "./utils/theme";
import Draggable from "./Draggable";

setup(createElement, undefined, useTheme);

interface IProps {
  initialSnippet: ISnippet;
  defaultEditorTab?: IEditorTabs;
  excludeEditorTabs?: IEditorTabs[];
  defaultResultTab?: IResultTabs;
  excludeResultTabs?: IResultTabs[];
  transformJs?: boolean;
  presets?: string[];
  id?: string;
  theme?: DefaultTheme;
  mode: ColorMode;
}

const Playground: FC<IProps> = ({
  id: userId,
  initialSnippet,
  defaultEditorTab = "markup",
  excludeEditorTabs = [],
  defaultResultTab = "result",
  excludeResultTabs = [],
  transformJs = false,
  presets = [],
  theme,
  mode = "light",
}) => {
  const [snippet, setSnippet] = useState<ISnippet>(initialSnippet);
  const id = useId(userId) as string;

  const onSnippetChange = (changed: string, type: IEditorTabs) => {
    setSnippet((snippet) => ({
      ...snippet,
      [type]: changed,
    }));
  };

  console.log("in Playground : ", excludeEditorTabs);

  return (
    <ThemeProvider userTheme={theme} mode={mode}>
      <div className="playground">
        <Draggable
          leftChild={(width) => (
            <Editor
              width={width}
              code={snippet}
              defaultTab={defaultEditorTab}
              excludeEditorTabs={excludeEditorTabs}
              onChange={onSnippetChange}
            />
          )}
          rightChild={(width) => (
            <Result
              width={width}
              id={id}
              snippet={snippet}
              defaultTab={defaultResultTab}
              excludeTabs={excludeResultTabs}
              transformJs={transformJs}
              presets={presets}
            />
          )}
        />
      </div>
    </ThemeProvider>
  );
};

export default Playground;
