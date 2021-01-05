import styled from "styled-components/macro";

const Container = styled.div`
  width: 270px;
  height: 60vh;
  padding: 20px 40px;
  border-radius: 30px;
  background: #98e6b9;
  box-shadow: 30px 30px 60px #0d569f29, -3px -5px 30px #f5f7fc;
  div::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 15px;
  color: #ffffff;
  span {
    font-weight: 800;
  }
`;

const TextContainer = styled.div`
  display: grid;
  overflow: auto;
  height: 45vh;
  padding-right: 20px;
`;

const Headline = styled.span`
  padding-bottom: 8px;
  color: #ffffff;
`;

const Content = styled.span`
  padding-bottom: 20%;
`;

export default function Preparation() {
  return (
    <>
      <Container>
        <Header>
          <span>Fastentage</span>
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
