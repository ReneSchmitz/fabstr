import styled from "styled-components/macro";
import logo from "../assets/icon/fabstr.png";
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

const Logo = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 40%;
`;

const Title = styled.h2`
  font-size: 2em;
  position: fixed;
  top: 10%;
  display: grid;
  place-self: right;
`;

export const CalenderPage = () => {
  return (
    <Container>
      <Title>Kalender</Title>
      <Logo src={logo} alt="logo" />
      <Navigation activePath="/calender" />
    </Container>
  );
};
