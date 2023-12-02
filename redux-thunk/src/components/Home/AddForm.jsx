import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __addLetters } from "../../redux/module/letterSlice";
import { v4 } from "uuid";

function AddForm() {
  const [content, setContent] = useState("");
  const nickname = localStorage.getItem("nickname");
  const avatar = localStorage.getItem("avatar");
  const userId = localStorage.getItem("id");
  const createdAt = new Date();
  const dispatch = useDispatch();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickAddLetter = () => {
    const newLetter = {
      id: v4(),
      nickname,
      content,
      avatar,
      writedTo: "",
      createdAt: `${createdAt.getFullYear()}. ${createdAt.getMonth()}. ${createdAt.getDate()}`,
      userId,
    };
    dispatch(__addLetters(newLetter));
  };

  return (
    <AddFormContainer>
      {/* <NickName>{nickname}</NickName> */}

      <TextAreaWrapper>
        <Label>닉네임 : {nickname.replace(/["]+/g, "")}</Label>
        <TextArea
          placeholder="내용을 입력해 주세요."
          value={content}
          onChange={onChangeContent}></TextArea>
      </TextAreaWrapper>
      <SelectMember>
        <option value="A HEAD FULL OF DREAMS">A HEAD FULL OF DREAMS</option>
        <option value="GHOST STORIES">GHOST STORIES</option>
        <option value="MYLO XYLOTO">MYLO XYLOTO</option>
        <option value="VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS">
          VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS
        </option>
        <option value="X&Y">X&Y</option>
        <option value="A RUSH OF BLOOD TO THE HEAD">
          A RUSH OF BLOOD TO THE HEAD
        </option>
        <option value="PARACHUTES">PARACHUTES</option>
      </SelectMember>
      <Button onClick={onClickAddLetter}>추가</Button>
    </AddFormContainer>
  );
}

export default AddForm;

const AddFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 500px;
  border: 1px solid #fff;
`;

const TextAreaWrapper = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  color: #ffa2f3;
  font-family: sans-serif;
`;

const TextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid #ffa2f3;
  padding: 40px 8px 10px 8px;
  outline: none;
  color: #fff;
  resize: none;
  width: 400px;
  height: 300px;
  font-family: sans-serif;
`;
const SelectMember = styled.select``;

const Button = styled.button``;
