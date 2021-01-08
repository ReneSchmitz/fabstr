import styled from "styled-components/macro";
import groceries from "../assets/icon/groceries.svg";

import Navigation from "../components/Navigation";
import GroceriesList from "../components/GroceriesList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  div::-webkit-scrollbar {
    display: none;
  }
`;

const Frame = styled.div`
  opacity: 0.8;
  position: fixed;
  height: 27vh;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
  img {
    max-width: 40%;
    position: relative;
    top: 2.8em;
    left: 12em;
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
      <Frame>
        <img src={groceries} alt="" />
      </Frame>

      <GroceriesList />
      <Navigation activePath="/list" />
    </Container>
  );
};
