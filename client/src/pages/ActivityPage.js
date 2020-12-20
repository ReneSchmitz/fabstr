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

const Title = styled.h1`
  font-size: 3.5rem;
`;

export const ActivityPage = () => {
  return (
    <Container>
      <Title>Activity</Title>
      <Logo src={logo} alt="logo" />
      <Navigation activePath="/activity" />
    </Container>
  );
};
