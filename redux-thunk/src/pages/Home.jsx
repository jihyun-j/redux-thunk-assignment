import Layout from "../components/Layout/Layout";
import Header from "../components/Home/Header";
import AddForm from "../components/Home/AddForm";
import LetterList from "../components/Home/LetterList";
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";

function Home() {
  const data = useSelector((state) => state.letter);

  return (
    <>
      <Layout></Layout>
      <HomeContainer>
        <Header></Header>
        <AddForm></AddForm>
        <LetterList></LetterList>
      </HomeContainer>
    </>
  );
}

export default Home;

const HomeContainer = styled.div`
  background: linear-gradient(
    8deg,
    rgba(0, 63, 115, 1) 0%,
    rgba(64, 0, 88, 1) 77%,
    #52033d 100%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
