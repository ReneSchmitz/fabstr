import styled from "styled-components/macro";
import MainLogo from "../components/MainLogo";
import Loading from "../components/Loading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: content;
  place-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #eff2f8;
`;

function LoadingScreen() {
  return (
    <Container>
      <MainLogo />
      <Loading />
    </Container>
  );
}

export default LoadingScreen;
