import styled from "styled-components/macro";
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

const Title = styled.h2`
  font-size: 2em;
  position: fixed;
  top: 9%;
  display: grid;
  left: 2.4em;
  z-index: 2;
`;

export const CalendarPage = () => {
  return (
    <Container>
      <Title>Daily</Title>
      <DailyCardSlider />
      <Navigation activePath="/calendar" />
    </Container>
  );
};
