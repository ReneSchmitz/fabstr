import styled from "styled-components/macro";
import smile from "../assets/icon/smile.svg";
import sad from "../assets/icon/coloredSad.svg";
import { Link } from "react-router-dom";

const Header = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  position: fixed;
  top: 25%;
  display: center;
`;

const Text = styled.h2`
  position: fixed;
  top: 39%;
  text-align: center;
`;

const Container = styled.div`
  position: fixed;
  top: 57%;
`;

const Happiness = styled.img`
  margin-right: 10px;
`;

const Sadness = styled.img`
  margin-left: 10px;
`;

export default function HappyComp() {
  const sadText = "Das ist ok!";
  const sadDaily = "Gönn’ dir heute viel Ruhe.";

  return (
    <>
      <Header>{sadText}</Header>
      <Text>{sadDaily}</Text>
      <Container>
        <Link to="/home">
          <Happiness src={smile} alt="happy" />
          <Sadness src={sad} alt="sad" />
        </Link>
      </Container>
    </>
  );
}
