import styled from "styled-components/macro";
import smile from "../assets/icon/coloredSmile.svg";
import sad from "../assets/icon/sad.svg";

const Header = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  position: fixed;
  top: 25%;
  display: grid;
  place-self: left;
`;

const Text = styled.h2`
  position: fixed;
  top: 39%;
  display: grid;
  place-self: left;
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
  return (
    <>
      <Header>Hi Lisa,</Header>
      <Text>wie geht es dir heute?</Text>
      <Container>
        <Happiness src={smile} alt="happy" />
        <Sadness src={sad} alt="sad" />
      </Container>
    </>
  );
}
