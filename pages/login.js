import React, { useState, useCallback } from "react";

export const useInput = (init = null) => {
  const [value, setter] = useState(init);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Login = () => {
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");
  return (
    <div>
      <h1>11</h1>
    </div>
  );
};

export default Login;
