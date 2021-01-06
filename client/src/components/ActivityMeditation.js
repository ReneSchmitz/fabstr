import styled from "styled-components/macro";
import meditate from "../assets/icon/meditation.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 200px;
  height: 31vh;
  padding: 20px 40px;
  border-radius: 30px;
  background: #ffffff;
  opacity: 0.8;
  box-shadow: 30px 30px 60px #0d569f29, -3px -5px 30px #f5f7fc;
  div::-webkit-scrollbar {
    display: none;
  }
`;

const Body = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }
  span {
    margin-top: 15px;
    color: #202020;
    font-weight: 800;
  }
`;

export default function Meditation() {
  return (
    <>
      <Container>
        <Body>
          <img src={meditate} alt="meditating person" />
          <span>Meditation</span>
        </Body>
      </Container>
    </>
  );
}
