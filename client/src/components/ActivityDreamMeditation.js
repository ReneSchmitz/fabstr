import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 200px;
  height: 31vh;
  padding: 20px 40px;
  border-radius: 30px;
  background: lightgray;
  box-shadow: 30px 30px 60px #0d569f29, -3px -5px 30px #f5f7fc;
  div::-webkit-scrollbar {
    display: none;
  }
`;

const Body = styled.div`
  margin-bottom: 15px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  span {
    font-weight: 800;
  }
`;

export default function DreamMeditation() {
  return (
    <>
      <Container>
        <Body>
          <span>Traumreise</span>
        </Body>
      </Container>
    </>
  );
}
