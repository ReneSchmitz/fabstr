import styled from "styled-components/macro";
import button from "../assets/icon/profile.svg";
import BreathingBear from "../components/BreathingBear";
import Navigation from "../components/Navigation";
import SpeechBubbleExercise from "../components/SpeechBubbleExercise";

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

export const MeditationPageExercise = () => {
  return (
    <Container>
      <ProfileButton src={button} alt="profil button" />
      <BreathingBear />
      <SpeechBubbleExercise />
      <Navigation activePath="/activity" />
    </Container>
  );
};
