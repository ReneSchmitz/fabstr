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
  justify-content: space-between;
  box-shadow: 30px 30px 60px #0d569f29, -3px -5px 30px #f5f7fc;
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

export default function SpeakingBubble() {
  return (
    <>
      <Container>
        <Body>
          <span>3 sec einatmen…</span>
          <span>3 sec ausatmen…</span>
        </Body>
      </Container>
    </>
  );
}
