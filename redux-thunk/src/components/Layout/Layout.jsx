import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("/profile");
  };
  return (
    <NavContainer>
      <HomePage>Home</HomePage>

      <NavWrapper>
        <NavList onClick={navigateToProfile}>Profile</NavList>
        <NavList>Log Out</NavList>
      </NavWrapper>
    </NavContainer>
  );
}

export default Layout;

const NavContainer = styled.nav`
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

const HomePage = styled.div`
  color: #ffa2f3;
  font-size: 18px;
  cursor: pointer;
`;

const NavWrapper = styled.ul`
  font-size: 18px;
  display: flex;
  gap: 20px;
`;

const NavList = styled.li`
  color: #ffa2f3;
  cursor: pointer;
`;
