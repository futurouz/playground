import { RefObject } from "react";
interface IProps {
    containerRef: RefObject<HTMLDivElement | null>;
    dividerRef: RefObject<HTMLDivElement | null>;
    dividerWidth: number;
}
declare function useDrag({ containerRef, dividerRef, dividerWidth }: IProps): {
    leftWidth: number;
    rightWidth: number;
};
export default useDrag;
