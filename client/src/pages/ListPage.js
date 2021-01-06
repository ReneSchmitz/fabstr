import styled from "styled-components/macro";
import Navigation from "../components/Navigation";
import GroceriesList from "../components/GroceriesList";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #eff2f8;
  div::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 2em;
  position: fixed;
  top: 9%;
  display: grid;
  left: 2.4em;
  z-index: 2;
`;

export const ListPage = () => {
  return (
    <Container>
      <Title>Einkaufsliste</Title>
      <GroceriesList />
      <Navigation activePath="/list" />
    </Container>
  );
};
