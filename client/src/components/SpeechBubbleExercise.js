import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  position: relative;
  top: 10em;
  width: 78vw;
  height: 17vh;
  padding: 20px 40px;
  border-radius: 30px;
  align-items: center;
  background: #ffffff;
  opacity: 0.9;
  box-shadow: 30px 30px 60px #0d569f29, -3px -5px 30px #f5f7fc;
  a {
    text-decoration: none;
  }

  :after {
    content: "";
    display: block;
    position: absolute;

    top: -30px;
    left: 70px;

    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 0px solid transparent;
    border-right: 25px solid #ffffff;

    opacity: 0.9;
    box-shadow: 30px 30px 60px #0d569f29, -3px -5px 30px #f5f7fc;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: #808080;
    font-weight: 400;
    padding: 5px 0;
  }
`;

export default function SpeechBubbleExercise() {
  return (
    <>
      <Container>
        <Link to="/meditation/intro">
          <Body>
            <span>Atme 3 Sekunden lang tief ein... und aus.</span>
          </Body>
        </Link>
      </Container>
    </>
  );
}
