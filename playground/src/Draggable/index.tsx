import React, { FC, ReactNode, useRef } from "react";
import styled from "styled-components";

import useDrag from "./useDrag";
import { useTheme } from "../utils/ThemeProvider";
import media from "../utils/media";

const Wrapper = styled.div`
  display: flex;
  border: 16px solid #252530;
  border-radius: 8px;

  ${media.phone} {
    flex-direction: column;
  }
`;

const Divider = styled.div`
  width: 15px;
  cursor: col-resize;
  background-color: #252530;
`;

interface IProps {
  leftChild: (width: number) => ReactNode;
  rightChild: (width: number) => ReactNode;
}

const Draggable: FC<IProps> = ({ leftChild, rightChild }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const themeContext = useTheme();

  const { leftWidth, rightWidth } = useDrag({
    containerRef,
    dividerRef,
    dividerWidth: themeContext.divider.width,
  });

  return (
    <Wrapper ref={containerRef}>
      {leftChild(leftWidth)}
      <Divider ref={dividerRef} />
      {rightChild(rightWidth)}
    </Wrapper>
  );
};

export default Draggable;
