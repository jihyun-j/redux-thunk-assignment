import React, { useEffect } from "react";
import styled from "styled-components";
import Nav from "../components/Layout/Layout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const userInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const profileData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const result = await axios
      .get("https://moneyfulpublicpolicy.co.kr/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });

    localStorage.setItem("avatar", result.data.avatar);
  };

  useEffect(() => {
    profileData().then((res) => console.log(res));
  }, []);

  return (
    <>
      <Nav></Nav>
      <ProfileContainer>
        <ProfileWrapper>
          <UserAvatar></UserAvatar>
          <UserNickName>User Nickname</UserNickName>
          <UserId>User Id</UserId>
          <EditButton>수정</EditButton>
        </ProfileWrapper>
      </ProfileContainer>
    </>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  background: linear-gradient(
    8deg,
    rgba(0, 63, 115, 1) 0%,
    rgba(64, 0, 88, 1) 77%,
    #52033d 100%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  border: 1px solid #7a5ccc;
  box-shadow: #dfd4ff28 2px 0 30px 2px;
`;

const UserAvatar = styled.div`
  background-image: url("https://images.unsplash.com/photo-1701308450512-d3a2aeeff787?q=80&w=2408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 5px;
`;

const UserNickName = styled.p`
  color: #ffa2f3;
  font-family: sans-serif;
  font-size: 23px;
  font-weight: bold;
`;

const UserId = styled.p`
  color: #ffa2f3;
  font-family: sans-serif;
`;

const EditButton = styled.button`
  background-color: #ffa2f3;
  color: #020381;
  border: 1px solid #ffa2f3;
  font-size: 14px;
  padding: 5px 10px;
  width: 100px;
  border-radius: 50px;
  margin-top: 20px;
`;
