import styled from "styled-components/macro";
import button from "../assets/icon/profile.svg";
import Happiness from "../components/Happiness";
import Navigation from "../components/Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #eff2f8;
`;

const ProfileButton = styled.img`
  position: fixed;
  top: 0%;
  display: flex;
  height: 20%;
  flex-direction: column;
  align-self: flex-end;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 30px;
  width: 40%;
  z-index: 6;
`;

export const HappyPage = () => {
  return (
    <Container>
      <ProfileButton src={button} alt="profil button" />
      <Happiness />
      <Navigation activePath="/" />
    </Container>
  );
};
