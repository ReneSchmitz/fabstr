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
  background: #eff2f8;
`;

const Title = styled.h2`
  font-size: 2em;
  position: fixed;
  top: 10%;
  display: grid;
  place-self: right;
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
