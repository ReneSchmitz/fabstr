import styled from "styled-components/macro";
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

const Title = styled.h1`
  font-size: 3.5rem;
`;

export const ListPage = () => {
  return (
    <Container>
      <Title>Einkaufsliste</Title>
      <Navigation activePath="/list" />
    </Container>
  );
};
