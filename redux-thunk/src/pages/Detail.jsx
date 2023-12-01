import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";

function Detail() {
  return (
    <>
      <Layout></Layout>
      <DetailContainer>
        <DetailWrapper>
          <Avatar></Avatar>
          <NickName>NickName</NickName>
          <Date>Date</Date>
          <Content>Content</Content>
        </DetailWrapper>
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
