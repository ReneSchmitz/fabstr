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
  position: fixed;
  height: 27vh;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 2;
  box-shadow: 10px 10px 60px #0d569f29;
  img {
    opacity: 0.8;
    max-width: 38%;
    position: relative;
    top: 2.7em;
    left: 12em;
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

export const ListPage = () => {
  return (
    <Container>
      <Title>Groceries</Title>
      <Frame>
        <img src={groceries} alt="" />
      </Frame>

      <GroceriesList />
      <Navigation activePath="/list" />
    </Container>
  );
};
