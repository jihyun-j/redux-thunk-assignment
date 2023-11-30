import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showSignup } from "../../redux/module/login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { logIn } from "../../redux/module/auth";

function LogInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangeUserPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (id, password) => {
    const result = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/login",
      {
        id,
        password,
      }
    );

    const { accessToken, nickname, userId } = result.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("id", userId);
  };

  const onClickShowLogIn = (e) => {
    navigate("/");
    loginHandler(userId, password);
    dispatch(logIn({ id: userId, password: password }));
  };

  const onClickSignUp = (e) => {
    e.preventDefault();
    dispatch(showSignup(true));
  };

  return (
    <LogInFormContainer>
      <LogInFormTitle>Log In</LogInFormTitle>

      <InputWrapper>
        <Label htmlFor="id">ID</Label>
        <Input
          type="text"
          name="id"
          id="id"
          // placeholder="아이디(4-10글자)"
          maxLength={10}
          value={userId}
          onChange={onChangeUserId}
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="password">PASSWORD</Label>
        <Input
          type="password"
          id="password"
          name="password"
          // placeholder="비밀번호(4-15글자)"
          maxLength={15}
          value={password}
          onChange={onChangeUserPassword}
        />
      </InputWrapper>

      <ButtonWrapper>
        <LogInButton onClick={onClickShowLogIn}>Log In</LogInButton>
        <SignUpButton onClick={onClickSignUp}>Sign Up</SignUpButton>
      </ButtonWrapper>
    </LogInFormContainer>
  );
}

export default LogInForm;

const LogInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid #7a5ccc;
  padding: 50px;
  height: 400px;
`;

const LogInFormTitle = styled.h2`
  font-size: 30px;
  color: #ffa2f3;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  position: absolute;
  top: 6px;
  left: 8px;
  font-size: 12px;
  color: #ffa2f3;
`;

const Input = styled.input`
  height: 60px;
  width: 300px;
  background-color: transparent;
  border: 1px solid #ffa2f3;
  padding: 20px 8px 10px 8px;
  outline: none;
  color: #fff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const LogInButton = styled.button`
  background-color: #ffa2f3;
  border: 1px solid #ffa2f3;
  color: #020381;
  outline: none;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 50px;
`;

const SignUpButton = styled.button`
  background-color: transparent;
  border: 1px solid #ffa2f3;
  color: #ffa2f3;
  outline: none;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 50px;
`;
