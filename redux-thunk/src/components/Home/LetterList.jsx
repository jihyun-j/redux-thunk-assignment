import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getLetters } from "../../redux/module/letterSlice";
import { useNavigate } from "react-router-dom";

function LetterList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { letters, isLoading } = useSelector((state) => {
    return state.letterSlice;
  });

  useEffect(() => {
    dispatch(__getLetters());
  }, []);

  const onClickDetail = (letterId) => {
    navigate(`detail/${letterId}`);
  };

  return (
    <LetterListContainer>
      {letters.map((letter) => {
        return (
          <LetterListWrapper
            key={letter.id}
            onClick={() => onClickDetail(letter.id)}>
            <UserNickName>{letter.nickname}</UserNickName>
            <PostContent>{letter.content}</PostContent>
            <PostDate>{letter.createdAt}</PostDate>
            {/* <UserPhoto src={letter.avatar}></UserPhoto> */}
          </LetterListWrapper>
        );
      })}
    </LetterListContainer>
    // <LetterListContainer>
    //   <UserPhoto></UserPhoto>
    //   <UserNickName></UserNickName>
    //   <PostDate></PostDate>
    //   <PostContent></PostContent>
    // </LetterListContainer>
  );
}

export default LetterList;

const LetterListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  min-width: 800px;
`;

const LetterListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  border: 1px solid #fff;
  padding: 20px;
  min-width: 300px;
  cursor: pointer;
`;
const UserPhoto = styled.img``;

const UserNickName = styled.p`
  color: #ffa2f3;
  font-family: sans-serif;
  font-size: 14px;
`;
const PostDate = styled.p`
  color: #ffa2f3;
  font-family: sans-serif;
  font-size: 14px;
`;
const PostContent = styled.p`
  color: #ffa2f3;
  font-family: serif;
  font-size: 28px;
`;
