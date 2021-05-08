import { IEditorTabs, ISnippet } from "../types";
declare type Props = {
  width: number;
  code: ISnippet;
  defaultTab: IEditorTabs;
  onChange: (changed: string, type: IEditorTabs) => void;
};
export default function Editor({
  code,
  defaultTab,
  onChange,
  width,
}: Props): JSX.Element;
export {};
