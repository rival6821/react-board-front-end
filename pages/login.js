import React, { useState, useCallback } from "react";
import styled, { css } from "styled-components";

export const useInput = (init = null) => {
  const [value, setter] = useState(init);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Input = styled.input`
  border: 1px solid #ddd;
  width: 100%;
  font-size: 1rem;
  padding: 0.6rem;
  box-sizing: border-box;
  border-radious: 2px;
`;
const Label = styled.label`
  width: 100%;
  display: block;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Login = () => {
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");
  return (
    <div>
      <form style={{ padding: 10 }}>
        <Label htmlFor="user-id">아이디</Label>
        <Input
          id="user-id"
          value={id}
          onChange={setId}
          style={{ marginBottom: 20 }}
        />
        <Label htmlFor="user-password">비밀번호</Label>
        <Input id="user-password" value={password} onChange={setPassword} />
      </form>
    </div>
  );
};

export default Login;
