import { FC } from "react";
import { DefaultTheme } from "goober";
import { ISnippet, IEditorTabs, IResultTabs } from "./types";
import { ColorMode } from "./utils/theme";
interface IProps {
  initialSnippet: ISnippet;
  defaultEditorTab?: IEditorTabs;
  defaultResultTab?: IResultTabs;
  transformJs?: boolean;
  presets?: string[];
  id?: string;
  theme?: DefaultTheme;
  mode: ColorMode;
}
declare const Playground: FC<IProps>;
export default Playground;
