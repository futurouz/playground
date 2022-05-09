import { FC, ReactNode } from "react";
interface IProps {
    className?: string;
    leftChild: (width: number) => ReactNode;
    rightChild: (width: number) => ReactNode;
}
declare const Draggable: FC<IProps>;
export default Draggable;
