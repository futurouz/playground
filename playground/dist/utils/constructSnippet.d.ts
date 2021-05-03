import { ISnippet } from "../types";
/**
 * Constructs snippet from individual html, css and js code.
 */
declare function constructSnippet(
  { markup, css, javascript }: ISnippet,
  id: string | number,
  transformJs: boolean,
  presets: string[]
): string;
export default constructSnippet;
