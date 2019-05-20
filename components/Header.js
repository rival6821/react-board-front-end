import React from "react";
import styled, { css } from "styled-components";

const AppHead = styled.div`
  display: flex;
  border: 1px solid #ddd;
`;

const Logo = styled.div`
  flex: 1;
`;

const Login = styled.div`
  flex: 1;
  text-align: right;
`;

const Header = () => {
  return (
    <AppHead>
      <Logo>로고</Logo>
      <Login>로그인</Login>
    </AppHead>
  );
};

export default Header;
