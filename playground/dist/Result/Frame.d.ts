import { FC } from "react";
import { ISnippet } from "../types";
interface IProps {
    id: string | number;
    snippet: ISnippet;
    transformJs: boolean;
    presets: string[];
}
declare const Frame: FC<IProps>;
export default Frame;
