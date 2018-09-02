import React from "react";
import styled from "styled-components";

const Ribbon = ({ className, leftItems, rightItems, middleItems }) => (
  <Container className={className}>
    <div>{leftItems}</div>
    <div>{middleItems}</div>
    <div>{rightItems}</div>
  </Container>
);

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  & > * {
    display: flex;
    align-items: center;
  }
`;

export default Ribbon;
