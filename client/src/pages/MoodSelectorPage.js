import styled from "styled-components/macro";
import button from "../assets/icon/profile.svg";
import Happiness from "../components/Happiness";
import Sadness from "../components/Sadness";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
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

export const MoodSelector = () => {
  const { mood } = useParams();
  return (
    <Container>
      <ProfileButton src={button} alt="profil button" />
      {mood === "happy" && <Happiness />}
      {mood === "sad" && <Sadness />}
      {mood !== "sad" && mood !== "happy" && <>unknown mood</>}

      <Navigation activePath="/home" />
    </Container>
  );
};
