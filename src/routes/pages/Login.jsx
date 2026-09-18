import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router";

export default function Login() {
  const { login } = useAuth();
  const navigation = useNavigate();

  const handleClick = () => {
    login();
    navigation("/dashboard");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
