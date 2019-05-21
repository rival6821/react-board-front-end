import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import Link from "next/link";

const Nav = styled.div`
  display: flex;
  padding: 10px 16px;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  box-shadow: 1px 1px 3px #ddd;
`;

const Logo = styled.div`
  a{
    color #333;
    font-size : 20px;
  }
`;

const Btns = styled.div`
  button {
    margin-left: 10px;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo>
        <Link href="/">
          <a>후니보드</a>
        </Link>
      </Logo>
      <Btns>
        <Button>
          <Link href="/join">
            <a>회원가입</a>
          </Link>
        </Button>
        <Button type="primary">로그인</Button>
      </Btns>
    </Nav>
  );
};

export default Header;
