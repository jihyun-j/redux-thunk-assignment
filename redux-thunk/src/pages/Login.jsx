import React from "react";
import styled from "styled-components";
import LogInForm from "../components/Login/LogInForm";
import SignUpForm from "../components/Login/SignUpForm";
import { useSelector } from "react-redux";

function Login() {
  const loginData = useSelector((state) => state.login);

  return (
    <LogInContainer>
      {loginData.showLogIn && !loginData.showSignUp ? <LogInForm /> : null}
      {loginData.showSignUp ? <SignUpForm /> : null}
    </LogInContainer>
  );
}

export default Login;

const LogInContainer = styled.div`
  background: linear-gradient(
    8deg,
    rgba(0, 63, 115, 1) 0%,
    rgba(64, 0, 88, 1) 77%,
    #52033d 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

// 회원가입 누르면 회원가입 폼
// 회원가입에서 로그인 누르면
// 로그인 완료하면
