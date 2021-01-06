import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import dream from "../assets/icon/dream.svg";

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

export default function DreamMeditation() {
  return (
    <>
      <Container to="/home">
        <Body>
          <img src={dream} alt="dream meditate" />
          <span>Traumreise</span>
        </Body>
      </Container>
    </>
  );
}
