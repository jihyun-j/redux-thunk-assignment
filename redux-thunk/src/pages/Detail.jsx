import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __deleteLetters, __editLetters } from "../redux/module/letterSlice";

function Detail() {
  const { id } = useParams();
  const data = useSelector((state) => state.letterSlice.letters);
  const dispatch = useDispatch();
  const filteredLetter = data.filter((letter) => letter.id === id);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");

  const onClickEditing = () => {
    setIsEditing(!isEditing);
  };

  const onClickDoneWithEditing = () => {
    setIsEditing(!isEditing);
    dispatch(__editLetters({ id, editContent }));
    console.log("ss");
  };

  const onChangeEditingContent = (e) => {
    setEditContent(e.target.value);
  };

  const onDeleteContent = (id) => {
    dispatch(__deleteLetters({ id: id }));
  };

  return (
    <>
      <Layout></Layout>
      <DetailContainer>
        {filteredLetter.map((letter) => {
          return (
            <DetailWrapper key={letter.id}>
              <Avatar></Avatar>
              <NickName>{letter.nickname}</NickName>
              <Date>{letter.createdAt}</Date>
              {!isEditing ? (
                <Content>{letter.content}</Content>
              ) : (
                <EditingContent
                  defaultValue={letter.content}
                  onChange={onChangeEditingContent}></EditingContent>
              )}

              {!isEditing ? (
                <button onClick={onClickEditing}>수정</button>
              ) : (
                <button onClick={onClickDoneWithEditing}>완료</button>
              )}
              <button onClick={() => onDeleteContent(letter.id)}>삭제</button>
            </DetailWrapper>
          );
        })}
      </DetailContainer>
    </>
  );
}

export default Detail;

const DetailContainer = styled.div`
  background-color: coral;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailWrapper = styled.div`
  background-color: skyblue;
`;

const Avatar = styled.img``;

const NickName = styled.p``;
const Date = styled.p``;
const Content = styled.p``;
const EditingContent = styled.textarea``;
