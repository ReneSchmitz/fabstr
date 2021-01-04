import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Container = styled.div`
  width: 270px;
  height: 65vh;
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
  height: 52vh;
  padding-right: 20px;
`;

const Headline = styled.span`
  padding-bottom: 8px;
  color: #ffffff;
`;

const Content = styled.span`
  padding-bottom: 20%;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  color: #808080;
`;

export default function Preparation() {
  return (
    <>
      <Container>
        <Header>
          <span>Die Vorbereitung</span>
          <span>Tag 0</span>
        </Header>
        <TextContainer>
          <Headline>Freunde & Familie</Headline>
          <Content>
            Der Weg ist das Ziel - Sucht euch ein Datum aus, an dem ihr nicht
            durch Geburtstage oder Feiertage abgelenkt werden könnt.
          </Content>
          <Headline>Job & Schule</Headline>
          <Content>
            Startet mit der Entlastung an einem Mittwoch. So beginnt die
            Fastenzeit erst am Freitag und ihr habt das ganze Wochenende, um
            euch auf die neue Situation einzustellen.
          </Content>
          <Headline>Lebensmittel</Headline>
          <Content>
            Bevor du startest solltest du ungesunde Lebensmittel verbannen und
            deine Vorräte mit hochwertigen Bio-Produkten füllen. Folge hierzu
            der, in der App integrierten,{" "}
            <Anchor to="/list">Einkaufsliste</Anchor>. Hier ist alles enthalten
            was du benötigst.
          </Content>
          <Headline>Aktivität</Headline>
          <Content>
            Ruhe ist das &ldquo;A&rdquo; und &ldquo;O&rdquo;. Aber Bewegung ist
            nicht nur erlaubt, sondern erwünscht. Schaue hierfür in der Rubrik{" "}
            <Anchor to="/activity">Activity</Anchor> vorbei.
          </Content>
        </TextContainer>
      </Container>
    </>
  );
}
