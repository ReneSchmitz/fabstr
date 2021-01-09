import styled from "styled-components/macro";
import tasks from "../assets/icon/tasks.svg";
import DailyCardSlider from "../components/DailyCardSlider";
import Navigation from "../components/Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const Frame = styled.div`
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  height: 27%;
  overflow: hidden;
  z-index: 1;
  img {
    max-width: 40%;
    position: relative;
    top: 1.7em;
    left: 11em;
  }
`;

const Title = styled.h2`
  font-size: 1.8em;
  position: fixed;
  top: 9%;
  display: grid;
  left: 15%;
  z-index: 2;
`;

export const CalendarPage = () => {
  return (
    <Container>
      <Title>Daily</Title>
      <Frame>
        <img src={tasks} alt="" />
      </Frame>

      <DailyCardSlider />
      <Navigation activePath="/calendar" />
    </Container>
  );
};
