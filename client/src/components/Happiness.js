import styled from "styled-components/macro";
import happy from "../assets/icon/jump.svg";
import tip from "../assets/icon/tip.svg";
import { Link } from "react-router-dom";

const Header = styled.h1`
  font-weight: 400;
  position: fixed;
  top: 23%;
`;

const Text = styled.h2`
  position: fixed;
  top: 37%;
  width: 90%;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 90vw;
  justify-content: space-around;
  top: 47%;
`;

const CardContainer = styled(Link)`
  display: grid;
  grid-template-rows: 25px 25px auto;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 135px;
  height: 31vh;
  padding: 15px 20px;
  border-radius: 30px;
  background: #ffffff;
  opacity: 0.8;
  box-shadow: 30px 30px 60px #0d569f29, -3px -5px 30px #f5f7fc;
  overflow: hidden;
  span {
    position: relative;
    text-align: center;
  }
  div::-webkit-scrollbar {
    display: none;
  }
`;

const Info = styled.img`
  height: 16px;
  justify-self: center;
`;

const Happiness = styled.img`
  width: 52px;
  justify-self: center;
`;

export default function HappyComp() {
  const happyText = "Sehr gut!";
  const happyDaily = "Wie wäre es mit einer kleinen Beschäftigung?";

  return (
    <>
      <Header>{happyText}</Header>
      <Text>{happyDaily}</Text>
      <Container>
        <CardContainer to="/home">
          <Info src={tip} alt="info" />
          <span>happy</span>
          <Happiness src={happy} alt="happy" />
        </CardContainer>
      </Container>
    </>
  );
}
