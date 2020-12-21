import styled from "styled-components/macro";

const Container = styled.div`
  width: 270px;
  height: 65vh;
  padding: 20px 40px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 30px 30px 60px #0d569f29, -10px -10px 70px #ffffff;
  div::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 15px;
`;

const TextContainer = styled.div`
  display: grid;
  overflow: auto;
  height: 52vh;
  padding-right: 20px;
`;

const Headline = styled.p`
  padding-bottom: 8px;
`;

const Content = styled.span`
  padding-bottom: 20%;
`;

export default function Preparation() {
  return (
    <>
      <Container>
        <Header>
          <p>Kostaufbau</p>
          <span>Tag 8-10</span>
        </Header>
        <TextContainer>
          <Headline>Morgens</Headline>
          <Content>Kräutertee</Content>
          <Headline>Vormittags</Headline>
          <Content>Fastenbrechen mit einem reifen Apfel</Content>
          <Headline>Mittags</Headline>
          <Content>Kartoffel-Gemüse-Suppe</Content>
          <Headline>Nachmittags</Headline>
          <Content>Trinken wie bisher</Content>
          <Headline>Abends</Headline>
          <Content>Tomatensuppe, Buttermilch mit Leinsamen, Knäckebrot</Content>
        </TextContainer>
      </Container>
    </>
  );
}
