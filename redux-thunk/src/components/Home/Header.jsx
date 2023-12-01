import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { active } from "../../redux/module/album";

function Header() {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const onClickActive = (e) => {
    if (e.target === e.currentTarget) return;
    dispatch(active(e.target.textContent));
  };

  return (
    <HeaderContainer>
      <HeaderTitle>COLDPLAY</HeaderTitle>
      <Description>
        Add your voice to the story - submit a memory based on any Coldplay
        album
      </Description>
      <TabContainer onClick={onClickActive}>
        <Tab $activeMember={activeMember}>A HEAD FULL OF DREAMS</Tab>
        <Tab $activeMember={activeMember}>GHOST STORIES</Tab>
        <Tab $activeMember={activeMember}>MYLO XYLOTO</Tab>
        <Tab $activeMember={activeMember}>
          VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS
        </Tab>
        <Tab $activeMember={activeMember}>X&Y</Tab>
        <Tab $activeMember={activeMember}>A RUSH OF BLOOD TO THE HEAD</Tab>
        <Tab $activeMember={activeMember}>PARACHUTES</Tab>
      </TabContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px 0;
  gap: 30px;
`;

const HeaderTitle = styled.h2`
  font-size: 50px;
  font-weight: bold;
  color: #ffa2f3;
  text-shadow: #f9dcf5d9 -1px 0 5px;
`;

const Description = styled.span`
  font-family: sans-serif;
  color: #ffa2f3;
  border: 1px solid #ffa2f3;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 13px;
  text-transform: uppercase;
`;

const TabContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5px;
`;

const Tab = styled.li`
  background-color: ${(props) =>
    props.$activeMember === props.children ? "transparent" : "blue"};

  font-size: 12px;
  border: 1px solid #7a5ccc;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px 20px;

  width: 130px;
  height: 130px;
`;
