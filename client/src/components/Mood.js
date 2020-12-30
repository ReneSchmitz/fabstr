import styled from "styled-components/macro";
import happy from "../assets/icon/smile.svg";
import sad from "../assets/icon/sad.svg";
import { Link } from "react-router-dom";

const Header = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  position: fixed;
  top: 25%;
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

export default function Mood() {
  const greeting = "Hi Lisa,";
  const daily = "wie geht es dir heute?";

  return (
    <>
      <Header>{greeting}</Header>
      <Text>{daily}</Text>
      <Container>
        <Link to="/mood/happy">
          <Happiness src={happy} alt="happy" />
        </Link>
        <Link to="/mood/sad">
          <Sadness src={sad} alt="sad" />
        </Link>
      </Container>
    </>
  );
}
