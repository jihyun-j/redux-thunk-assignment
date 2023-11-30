import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showSignup } from "../../redux/module/login";
import axios from "axios";

function SignUpForm() {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");

  const signUpHandler = async (id, password, nickname) => {
    try {
      const result = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id,
          password,
          nickname,
        }
      );
    } catch (err) {
      let error = err.response.status;
      if (error === 409) {
        console.log("존재하는 아이디입니다.");
      }
    }
  };

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onClickSignUp = (e) => {
    e.preventDefault();
    dispatch(showSignup(false));
    signUpHandler(userId, password, nickName);
  };

  return (
    <SignUpFormContainer>
      <SignUpFormTitle>Sign Up</SignUpFormTitle>

      <InputWrapper>
        <Label htmlFor="id">ID</Label>
        <Input
          type="text"
          id="id"
          name="id"
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
          onChange={onChangePassword}
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="nickname">NICKNAME</Label>
        <Input
          type="text"
          id="nickname"
          name="nickname"
          // placeholder="닉네임(1-10글자)"
          maxLength={10}
          value={nickName}
          onChange={onChangeNickName}
        />
      </InputWrapper>

      <ButtonWrapper>
        <SignUpButton onClick={onClickSignUp}>Sign Up</SignUpButton>
        <LogInButton>Log In</LogInButton>
      </ButtonWrapper>
    </SignUpFormContainer>
  );
}

export default SignUpForm;

const SignUpFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid #7a5ccc;
  padding: 50px;
  height: 400px;
`;

const SignUpFormTitle = styled.h2`
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
  background-color: transparent;
  border: 1px solid #ffa2f3;
  color: #ffa2f3;
  outline: none;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 50px;
`;

const SignUpButton = styled.button`
  background-color: #ffa2f3;
  border: 1px solid #ffa2f3;
  color: #020381;

  outline: none;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 50px;
`;
