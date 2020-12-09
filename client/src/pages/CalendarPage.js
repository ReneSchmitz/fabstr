import styled from "styled-components/macro";
import CustomCalendar from "../components/CustomCalendar";
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
`;

export const CalendarPage = () => {
  return (
    <Container>
      <Title>Kalender</Title>
      <CustomCalendar />
      <Navigation activePath="/calendar" />
    </Container>
  );
};
