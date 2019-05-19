import styled, { css } from "styled-components";

const Header = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
`;

const Logo = styled.div`
  flex: 1;
`;

const Login = styled.div`
  flex: 1;
  text-align: right;
`;

const Head = () => {
  return (
    <Header>
      <Logo>로고</Logo>
      <Login>로그인</Login>
    </Header>
  );
};
export default Head;
