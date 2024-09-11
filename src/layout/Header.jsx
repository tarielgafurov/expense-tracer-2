import React from "react";
import "./Header.css";
import Button from "../components/UI/Button";
import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  height: 65px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
`;

const Title = styled.h1`
  color: white;
`

const Header = (props) => {
  return (
    <HeaderStyled>
      <Title>Logo</Title>
      <Button onClick={props.open}>ADD EXPENSES</Button>
    </HeaderStyled>
  );
};

export default Header;



