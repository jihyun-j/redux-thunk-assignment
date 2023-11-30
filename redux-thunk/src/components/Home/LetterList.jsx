import React from "react";
import styled from "styled-components";
import axios from "axios";

function LetterList() {
  // const fetchLoginDate = async () => {
  //   return await axios.get("https://moneyfulpublicpolicy.co.kr/user");
  // };

  // fetchLoginDate();
  return (
    <LetterListContainer>
      <UserPhoto></UserPhoto>
      <UserNickName></UserNickName>
      <PostDate></PostDate>
      <PostContent></PostContent>
    </LetterListContainer>
  );
}

export default LetterList;

const LetterListContainer = styled.div``;

const UserPhoto = styled.img``;
const UserNickName = styled.p``;
const PostDate = styled.p``;
const PostContent = styled.p``;
