import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu } from "antd";

const dummy = {
  isLoggedIn: false
};

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link href="/">
          <a>후니보드</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link href="/login">
          <a>로그인</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="join">
        <Link href="/join">
          <a>회원가입</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
