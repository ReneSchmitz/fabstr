import styled from "styled-components/macro";
import arrow from "../assets/icon/arrowRight.svg";
import { Link } from "react-router-dom";
import Jogging from "../components/ActivityJogging";

const Header = styled.h2`
  font-size: 2.4em;
  position: fixed;
  top: 22%;
  text-shadow: 6px 6px 6px #0d569f29;
`;

const Text = styled.h2`
  position: fixed;
  top: 33%;
  width: 90%;
  text-align: center;
  text-shadow: 6px 6px 6px #0d569f29;
`;

const Anchor = styled(Link)`
  display: flex;
  position: fixed;
  width: 65%;
  top: 79%;
  justify-content: space-around;
  align-items: center;
  opacity: 0.5;
  img {
    width: 9%;
  }
`;

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 90vw;
  justify-content: space-around;
  top: 49%;
  a:first-child {
    position: relative;
    top: -30px;
    transform: scale(0.8);
  }
`;

export default function HappyComp() {
  const happyText = "Sehr gut!";
  const happyDaily = "Wie wäre es mit einer kleinen Beschäftigung?";

  return (
    <>
      <Header>{happyText}</Header>
      <Text>{happyDaily}</Text>
      <Container>
        <Jogging />
        <Anchor to="/activity">
          <span>Alle Aktivitäten entdecken</span>
          <img src={arrow} alt="arrow" />
        </Anchor>
      </Container>
    </>
  );
}
