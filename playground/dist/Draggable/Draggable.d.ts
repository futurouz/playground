import { ReactNode } from "react";
declare type Props = {
  leftChild: (width: number) => ReactNode;
  rightChild: (width: number) => ReactNode;
};
export default function Draggable(props: Props): JSX.Element;
export {};
