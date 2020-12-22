import styled from "styled-components/macro";
import smile from "../assets/icon/coloredSmile.svg";
import sad from "../assets/icon/sad.svg";
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
  const happyText = "Sehr gut!";
  const happyDaily = "Wie wäre es mit einer kleinen Beschäftigung?";

  return (
    <>
      <Header>{happyText}</Header>
      <Text>{happyDaily}</Text>
      <Container>
        <Link to="/">
          <Happiness src={smile} alt="happy" />
          <Sadness src={sad} alt="sad" />
        </Link>
      </Container>
    </>
  );
}
