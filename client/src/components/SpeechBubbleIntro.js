import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import bear from "../assets/icon/breathing.svg";
import tip from "../assets/icon/tip.svg";

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 78vw;
  height: 66vh;
  padding: 25px 35px;
  border-radius: 30px;
  align-items: center;
  background: #ffffff;
  opacity: 0.9;
  box-shadow: 30px 30px 60px #0d569f29, -3px -5px 30px #f5f7fc;
  text-decoration: none;
`;

const Body = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 30px auto 30px auto;
  align-items: center;
  justify-content: space-between;
  img {
    justify-self: center;
  }
  span {
    color: #808080;
    font-weight: 400;
    padding: 5px 0;
  }
  p {
    font-weight: 800;
    justify-self: center;
  }
`;

const BreathingBear = styled.img`
  position: relative;
  display: grid;
  margin: 0;
  padding: 0;
  width: 4em;
  box-sizing: border-box;
  object-fit: contain;
  @media (max-device-height: 800px) {
    transform: scale(0.8);
  }
  @media (max-device-height: 600px) {
    width: 0em;
  }
`;

const Info = styled.img`
  width: 15%;
`;

const Header = styled.p`
  font-weight: 800;
  justify-self: center;
`;

export default function SpeechBubbleIntro() {
  return (
    <>
      <Container to="/meditation/exercise">
        <Body>
          <Info src={tip} alt="info" />
          <Header>Atemübung</Header>
          <span>
            Im Altag tendieren wir dazu, unbewusst flach zu atmen. Für die
            Entspannung ist es jedoch wichtig, dass wir tief in den Bauch ein-
            und ausatmen. Außerdem schulst du so deine körperlichen und
            geistingen Fähigkeiten.
          </span>
          <p>2 – 10 Min</p>
          <BreathingBear src={bear} alt="bear" />
        </Body>
      </Container>
    </>
  );
}
