import { FC } from "react";
import { IEditorTabs } from "../types";
interface IProps {
    code: string;
    language: IEditorTabs;
    onChange: (value: string, language: IEditorTabs) => void;
}
declare const EditorSetup: FC<IProps>;
export default EditorSetup;
