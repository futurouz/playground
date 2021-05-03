import { FC } from "react";
import { IEditorTabs, ISnippet } from "../types";
interface IProps {
  width: number;
  code: ISnippet;
  defaultTab: IEditorTabs;
  onChange: (changed: string, type: IEditorTabs) => void;
}
declare const Editor: FC<IProps>;
export default Editor;
