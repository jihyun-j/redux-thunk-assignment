import React, { useState } from "react";
import styled from "styled-components";

function AddForm() {
  const [content, setContent] = useState("");
  const userId = localStorage.getItem("id");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <AddFormContainer>
      <NickName>닉네임: {userId}</NickName>
      <TextArea
        placeholder="내용을 입력해 주세요."
        value={content}
        onChange={onChangeContent}></TextArea>
      <SelectMember>
        <option value="카리나">카리나</option>
        <option value="닝닝">닝닝</option>
        <option value="윈터">윈터</option>
        <option value="지젤">지젤</option>
      </SelectMember>
    </AddFormContainer>
  );
}

export default AddForm;

const AddFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

const NickName = styled.p``;
const TextArea = styled.textarea`
  resize: none;
  width: 400px;
  height: 300px;
`;
const SelectMember = styled.select``;

// api문서대로 서버가 잘동작하는지 확인하기 위해서
// 누구의 잘못인지 파악용
// 브라우저에서 발생하는 콜스에러 브라우저의 도메인 서버의 도메인이 다른경우 콜스 에러가 남
//
