import { FC } from "react";
import { ISnippet, IResultTabs } from "../types";
interface IProps {
    id: string | number;
    snippet: ISnippet;
    defaultTab: IResultTabs;
    excludeTabs?: IResultTabs[];
    transformJs: boolean;
    presets: string[];
    width: number;
}
declare const Result: FC<IProps>;
export default Result;
