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
          <p>Fastentage</p>
          <span>Tag 3-7</span>
        </Header>
        <TextContainer>
          <Headline>Morgens</Headline>
          <Content>Kräutertee</Content>
          <Headline>Vormittags</Headline>
          <Content>Wasser und Tees</Content>
          <Headline>Mittags</Headline>
          <Content>Gemüsebrühe</Content>
          <Headline>Nachmittags</Headline>
          <Content>
            Früchte- oder Kräutertee, Zitronenschnitz, 1tl ungesüßtes Quittenmus
          </Content>
          <Headline>Abends</Headline>
          <Content>Verdünnte Säfte oder Gemüsebrühe</Content>
        </TextContainer>
      </Container>
    </>
  );
}
