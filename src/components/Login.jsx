import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input type="text" pHolder="Username" />
      <Input type="password" pHolder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
