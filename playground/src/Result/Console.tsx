import React, { FC } from "react";
import styled from "styled-components";
import Inspector from "@agney/react-inspector";

const Container = styled.div`
  background-color: black;
  color: white;
  height: 100%;

  li {
    font-size: 16px !important;
  }
`;

type Props = {
  logs: unknown[];
};

export default function Console({ logs }: Props) {
  return (
    <Container>
      {logs.map((log: unknown, index: number) => (
        <Inspector data={log} key={index} theme="chromeDark" />
      ))}
    </Container>
  );
}
