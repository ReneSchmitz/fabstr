import styled from "styled-components/macro";

const Container = styled.div`
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

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 15px;
`;

const Content = styled.div`
  display: grid;
  overflow: auto;
  height: 52vh;
  padding-right: 20px;
`;

export default function Preparation() {
  return (
    <>
      <Container>
        <Header>
          <p>Entlastungstage</p>
          <span>Tag 1-2</span>
        </Header>
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
