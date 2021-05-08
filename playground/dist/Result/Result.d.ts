import { ISnippet, IResultTabs } from "../types";
declare type Props = {
  id: string | number;
  snippet: ISnippet;
  defaultTab: IResultTabs;
  transformJs: boolean;
  presets: string[];
  width: number;
};
export default function Result(props: Props): JSX.Element;
export {};
