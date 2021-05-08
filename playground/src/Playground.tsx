import React, { useState, createElement } from "react";
import { useId } from "@reach/auto-id";
import { setup, DefaultTheme } from "goober";

import Editor from "./Editor/Editor";
import Result from "./Result/Result";
import { ISnippet, IEditorTabs, IResultTabs } from "./types";
import { ThemeProvider, useTheme } from "./utils/ThemeProvider";
import { ColorMode } from "./utils/theme";
import Draggable from "./Draggable/Draggable";

setup(createElement, undefined, useTheme);

type Props = {
  initialSnippet: ISnippet;
  defaultEditorTab?: IEditorTabs;
  defaultResultTab?: IResultTabs;
  transformJs?: boolean;
  presets?: string[];
  id?: string;
  theme?: DefaultTheme;
  mode: ColorMode;
};

function Playground({
  id: userId,
  initialSnippet,
  defaultEditorTab = "markup",
  defaultResultTab = "result",
  transformJs = false,
  presets = [],
  theme,
  mode = "light",
}: Props) {
  const [snippet, setSnippet] = useState<ISnippet>(initialSnippet);
  const id = useId(userId) as string;

  const onSnippetChange = (changed: string, type: IEditorTabs) => {
    setSnippet((snippet) => ({
      ...snippet,
      [type]: changed,
    }));
  };

  return (
    <ThemeProvider userTheme={theme} mode={mode}>
      <div className="playground">
        <Draggable
          leftChild={(width) => (
            <Editor
              width={width}
              code={snippet}
              defaultTab={defaultEditorTab}
              onChange={onSnippetChange}
            />
          )}
          rightChild={(width) => (
            <Result
              width={width}
              id={id}
              snippet={snippet}
              defaultTab={defaultResultTab}
              transformJs={transformJs}
              presets={presets}
            />
          )}
        />
      </div>
    </ThemeProvider>
  );
}

export default Playground;
