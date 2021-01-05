import styled from "styled-components/macro";

const Container = styled.div`
  width: 270px;
  height: 63vh;
  padding: 20px 40px;
  border-radius: 30px;
  background: lightgray;
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
  height: 49vh;
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
          <span>Nützliches</span>
          <span>Tag ~</span>
        </Header>
        <TextContainer>
          <Headline>Geschafft!</Headline>
          <Content>Du hast deine Fastenkur ervolgreich abgeschlossen.</Content>
          <Headline>Die Zeit danach</Headline>
          <Content>
            Der Grundstein für eine gesündere Zukunft ist gelegt. Also, versuche
            weiterhin auf schädliche Ernährungsweisen zu verzichten und dich
            ausgewogen mit reichlich frischen Zutaten zu ernähren.
          </Content>
        </TextContainer>
      </Container>
    </>
  );
}
