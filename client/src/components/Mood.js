import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import happy from "../assets/icon/jump.svg";
import sad from "../assets/icon/moody.svg";
import tip from "../assets/icon/tip.svg";

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

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 90vw;
  justify-content: space-around;
  top: 45%;
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
const Sadness = styled.img`
  width: 76px;
  justify-self: center;
`;

export default function Mood() {
  const greeting = "Hi René,";
  const daily = "wie geht es dir heute?";

  return (
    <>
      <Header>{greeting}</Header>
      <Text>{daily}</Text>
      <Container>
        <CardContainer to="/mood/happy">
          <Info src={tip} alt="info" />
          <span>happy</span>
          <Happiness src={happy} alt="happy" />
        </CardContainer>
        <CardContainer to="/mood/sad">
          <Info src={tip} alt="info" />
          <span>moody</span>
          <Sadness src={sad} alt="sad" />
        </CardContainer>
      </Container>
    </>
  );
}
