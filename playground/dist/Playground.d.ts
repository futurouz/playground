import { DefaultTheme } from "goober";
import { ISnippet, IEditorTabs, IResultTabs } from "./types";
import { ColorMode } from "./utils/theme";
declare type Props = {
  initialSnippet: ISnippet;
  defaultEditorTab?: IEditorTabs;
  defaultResultTab?: IResultTabs;
  transformJs?: boolean;
  presets?: string[];
  id?: string;
  theme?: DefaultTheme;
  mode: ColorMode;
};
declare function Playground({
  id: userId,
  initialSnippet,
  defaultEditorTab,
  defaultResultTab,
  transformJs,
  presets,
  theme,
  mode,
}: Props): JSX.Element;
export default Playground;
