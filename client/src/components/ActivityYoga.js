import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import yoga from "../assets/icon/yoga.svg";

const Container = styled(Link)`
  display: flex;
  flex-direction: column-reverse;
  text-decoration: none;
  width: 200px;
  height: 31vh;
  padding: 20px 40px;
  border-radius: 30px;
  background: #ffffff;
  opacity: 0.8;
  box-shadow: 30px 30px 60px #0d569f29, -3px -5px 30px #f5f7fc;
  overflow: hidden;
  div::-webkit-scrollbar {
    display: none;
  }
`;

const Body = styled.div`
  margin-bottom: 5px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: contain;
    width: 100%;
    @media (min-device-height: 800px) {
      position: relative;
      top: -10%;
      transform: scale(1.2);
    }
    @media (max-device-height: 800px) {
      position: relative;
      transform: scale(0.9);
    }
    @media (max-device-height: 660px) {
      position: relative;
      top: 10%;
      transform: scale(0.7);
    }
  }
  span {
    position: relative;
    margin-top: 15px;
    color: #202020;
    font-weight: 800;
  }
`;

export default function Yoga() {
  return (
    <>
      <Container to="/home">
        <Body>
          <img src={yoga} alt="yoga practitioner" />
          <span>Yoga</span>
        </Body>
      </Container>
    </>
  );
}
