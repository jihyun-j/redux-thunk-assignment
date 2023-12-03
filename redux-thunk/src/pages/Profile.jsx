import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const userId = localStorage.getItem("id");
  const nickName = localStorage.getItem("nickname");
  const getAvatar = localStorage.getItem("avatar");
  const [isEditing, setIsEditing] = useState(false);
  const [editNickName, setEditNickName] = useState("");
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const profileData = async () => {
    const result = await axios
      .get("https://moneyfulpublicpolicy.co.kr/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      .catch((err) => {
        let status = err.response.status;

        if (status === 401) {
          localStorage.setItem("id", "");
          localStorage.setItem("accessToken", "");
          localStorage.setItem("nickname", "");
          localStorage.setItem("avatar", "");
          navigate("/login");
        }
      });
  };

  useEffect(() => {
    profileData();
  }, []);

  const onChangeNickName = (e) => {
    setEditNickName(e.target.value);
  };

  const onClickEdit = () => {
    setIsEditing(!isEditing);
  };

  const onCompleteEdit = async () => {
    const result = await axios
      .patch(
        "https://moneyfulpublicpolicy.co.kr/profile",
        {
          nickname: editNickName,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
    localStorage.setItem("nickname", editNickName);
    setIsEditing(!isEditing);
  };

  const inputRef = useRef(null);
  const [fileReaderThumbnail, setFileReaderThumbnail] = useState();

  const onClickImage = () => {
    inputRef.current?.click();
  };

  const encodeFile = (fileBlob) => {
    // FileReader 방식
    const reader = new FileReader();

    if (!fileBlob) return;

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        const result = reader.result;

        setFileReaderThumbnail(result);

        resolve();
      };
    });
  };

  const onFileReaderChange = (e) => {
    const { files } = e.target;

    if (!files || !files[0]) return;

    const uploadImage = files[0];

    encodeFile(uploadImage);
  };

  return (
    <>
      <Nav></Nav>
      <ProfileContainer>
        <ProfileForm>
          <UserAvatar
            imgUrl={fileReaderThumbnail}
            onClick={onClickImage}></UserAvatar>

          <FileUploadInput
            hidden
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            ref={inputRef}
            onChange={onFileReaderChange}
            name="image-input"></FileUploadInput>

          {!isEditing ? (
            <UserNickName>{nickName}</UserNickName>
          ) : (
            <EditUserNickName
              defaultValue={nickName}
              onChange={onChangeNickName}></EditUserNickName>
          )}
          <UserId>{userId}</UserId>
          {!isEditing ? (
            <EditButton onClick={onClickEdit}>수정하기</EditButton>
          ) : (
            <>
              <CancelButton>수정취소</CancelButton>
              <EditButton onClick={onCompleteEdit}>수정완료</EditButton>
            </>
          )}
        </ProfileForm>
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

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  border: 1px solid #7a5ccc;
  box-shadow: #dfd4ff28 2px 0 30px 2px;
`;

const FileUploadInput = styled.input``;

const UserAvatar = styled.div`
  background-image: url(${(props) => props.imgUrl});
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

const EditUserNickName = styled.input``;

const UserId = styled.p`
  color: #ffa2f3;
  font-family: sans-serif;
`;

const CancelButton = styled.button``;

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
