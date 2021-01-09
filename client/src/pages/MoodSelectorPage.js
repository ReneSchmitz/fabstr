import styled from "styled-components/macro";
import button from "../assets/icon/profile.svg";
import Happiness from "../components/Happiness";
import Sadness from "../components/Sadness";
import tree from "../assets/icon/tree.svg";
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

const Logo = styled.h1`
  position: fixed;
  top: 7%;
  left: 10%;
  font-size: 26px;
  text-shadow: 0px 3px 6px #00000029;
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

const Background = styled.img`
  position: fixed;
  width: 140vw;
  z-index: -1;
  bottom: 0;
  left: 20%;
  opacity: 0.2;
`;

export const MoodSelector = () => {
  const { mood } = useParams();
  return (
    <Container>
      <Logo>Fabstr.</Logo>

      <ProfileButton src={button} alt="profil button" />
      {mood === "happy" && <Happiness />}
      {mood === "sad" && <Sadness />}
      {mood !== "sad" && mood !== "happy" && <>unknown mood</>}

      <Navigation activePath="/home" />
      <Background src={tree} alt="" />
    </Container>
  );
};
