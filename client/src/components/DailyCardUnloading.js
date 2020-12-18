import styled from "styled-components/macro";

const Container = styled.div`
  display: grid;
  grid-template-columns: 35px auto;
  grid-template-rows: 5px auto 40px 5px;
  width: 450px;
  padding: 20px 40px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 30px 30px 60px #0d569f29, -10px -10px 70px #ffffff;
`;

export default function UnloadingPhase() {
  return (
    <>
      <Container>
        <p>UnloadingPhase</p>
      </Container>
    </>
  );
}
