import React from "react";
import { ISnippet } from "../types";
declare type Props = {
  id: string | number;
  snippet: ISnippet;
  transformJs: boolean;
  presets: string[];
};
declare const Frame: React.MemoExoticComponent<
  ({ id, snippet, transformJs, presets }: Props) => JSX.Element
>;
export default Frame;
