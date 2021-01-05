import styled from "styled-components/macro";
import logo from "../assets/icon/fabstr.png";
import image from "../assets/img/oceanTwo.jpg";
import quote from "../assets/icon/quoteRight.svg";
import Navigation from "../components/Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #eff2f8;
`;

const Frame = styled.div`
  opacity: 0.7;
  position: fixed;
  top: 0;
  max-height: 30%;
  overflow: hidden;
  z-index: 1;
  img {
    max-width: 100%;
    position: relative;
    top: -5em;
  }
`;

const Quote = styled.div`
  display: grid;
  width: 80%;
  img {
    position: relative;
    top: -30px;
    display: flex;
    justify-content: flex-end;
  }
  p {
    margin-bottom: 5%;
  }
  span {
    font-family: "Bodoni 72", serif;
    font-weight: 800;
    font-size: 1.5em;
  }
`;

const Logo = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 40%;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: 800;
  position: fixed;
  top: 9%;
  display: grid;
  left: 2.4em;
  z-index: 2;
  color: #ffffff;
  text-shadow: 20px 20px 60px #303030, -20px -20px 60px #424040;
`;

export const ActivityPage = () => {
  return (
    <Container>
      <Title>Activity</Title>
      <Frame>
        <img src={image} alt="" />
      </Frame>
      <Quote>
        <p>Today&lsquo;s insiration</p>
        <img src={quote} alt="quote" />
        <span>
          Nothing behind me, <br />
          everything ahead of me.
        </span>
      </Quote>
      <Logo src={logo} alt="logo" />
      <Navigation activePath="/activity" />
    </Container>
  );
};
