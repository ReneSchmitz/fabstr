import styled from "styled-components/macro";
import ActivitySlider from "../components/ActivitySlider";
import activity from "../assets/icon/activity.svg";
import quote from "../assets/icon/quoteRight.svg";
import Navigation from "../components/Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  div:last-child {
    top: 44.5%;
  }
`;

const Frame = styled.div`
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  max-height: 27%;
  overflow: hidden;
  z-index: 1;
  img {
    max-width: 92%;
    position: relative;
    top: -6em;
    left: 4.3em;
  }
`;

const Quote = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 40px auto;
  width: 80%;
  position: fixed;
  top: 32%;
  span {
    font-family: "Bodoni 72", serif;
    font-weight: 800;
    font-size: 1.3em;
    word-spacing: 2px;
    line-height: 1.1;
  }
`;

const Title = styled.h2`
  font-size: 1.8em;
  font-weight: 400;
  position: fixed;
  top: 9%;
  display: grid;
  left: 15%;
  z-index: 2;
`;

export const ActivityPage = () => {
  return (
    <Container>
      <Title>Activity</Title>
      <Frame>
        <img src={activity} alt="" />
      </Frame>
      <Quote>
        <p>Today&lsquo;s inspiration</p>
        <img src={quote} alt="quote" />
        <span>Nothing behind me, everything ahead of me.</span>
      </Quote>
      <ActivitySlider />
      <Navigation activePath="/activity" />
    </Container>
  );
};
