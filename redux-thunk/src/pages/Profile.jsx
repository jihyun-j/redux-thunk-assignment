import React from "react";
import styled from "styled-components";
import Nav from "../components/Layout/Layout";
import axios from "axios";

function Profile() {
  const profileData = async () => {
    const token = localStorage.getItem("accessToken");
    const result = await axios.get("https://moneyfulpublicpolicy.co.kr/user");
    console.log(result.data);
  };

  profileData();

  return (
    <>
      <Nav></Nav>
      <ProfileContainer>
        <UserAvatar></UserAvatar>
        <UserNickName>User Nickname</UserNickName>
        <UserId>User Id</UserId>
        <EditButton>수정하기</EditButton>
      </ProfileContainer>
    </>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  background-color: skyblue;
`;

const UserAvatar = styled.img`
  background-color: blue;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: 5px;
`;

const UserNickName = styled.p``;
const UserId = styled.p``;

const EditButton = styled.button``;
