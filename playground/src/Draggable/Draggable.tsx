import React, { ReactNode, useRef, forwardRef } from "react";
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

type Props = {
  leftChild: (width: number) => ReactNode;
  rightChild: (width: number) => ReactNode;
};

export default function Draggable(props: Props) {
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
      {props.leftChild(leftWidth)}
      <Divider ref={dividerRef} />
      {props.rightChild(rightWidth)}
    </Wrapper>
  );
}
