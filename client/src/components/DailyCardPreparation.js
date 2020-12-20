import styled from "styled-components/macro";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  /* grid-template-rows: 5px auto 40px 5px; */
  width: 270px;
  height: 65vh;
  padding: 20px 40px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 30px 30px 60px #0d569f29, -10px -10px 70px #ffffff;
  div::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  overflow: auto;
  height: 52vh;
`;

export default function Preparation() {
  return (
    <>
      <Container>
        <p>Preparation</p>
        <span>Tag 0</span>
        <Content>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            dolorum enim earum excepturi molestiae odio voluptatibus libero
            soluta, fugiat sequi nemo ab eveniet incidunt veritatis sit. Tenetur
            error nam id?
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            dolorum enim earum excepturi molestiae odio voluptatibus libero
            soluta, fugiat sequi nemo ab eveniet incidunt veritatis sit. Tenetur
            error nam id?
          </span>
        </Content>
      </Container>
    </>
  );
}
