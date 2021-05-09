import React, { FC, ReactNode, useRef, forwardRef } from "react";
import { styled } from "goober";

import useDrag from "./useDrag";
import { useTheme } from "../utils/ThemeProvider";
import media from "../utils/media";

const Container = styled("div", forwardRef)`
  display: flex;
  border: 16px solid #252530;
  border-radius: 8px;

  ${media.phone} {
    flex-direction: column;
  }
`;

const Divider = styled("div", forwardRef)`
  width: 15px;
  cursor: col-resize;
  background-color: #252530;
`;
interface IProps {
  className?: string;
  leftChild: (width: number) => ReactNode;
  rightChild: (width: number) => ReactNode;
}

const Draggable: FC<IProps> = ({ className = "", leftChild, rightChild }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const themeContext = useTheme();
  const { leftWidth, rightWidth } = useDrag({
    containerRef,
    dividerRef,
    dividerWidth: themeContext.divider.width,
  });

  return (
    <Container className={className} ref={containerRef}>
      {leftChild(leftWidth)}
      <Divider ref={dividerRef} />
      {rightChild(rightWidth)}
    </Container>
  );
};

export default Draggable;
