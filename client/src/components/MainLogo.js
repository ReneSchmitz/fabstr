import styled from "styled-components/macro";

import logo from "../assets/icon/fabstr.png";

const Container = styled.div`
  position: fixed;
  top: 7%;
  padding: 0 1em;
  box-sizing: border-box;
  display: center;
  @media (max-device-height: 800px) {
    top: 0%;
    transform: scale(0.7);
  }
`;

const Logo = styled.img`
  width: 180px;
  display: grid;
  grid-area: image;
`;

const Header = styled.h1`
  display: grid;
  padding-top: 15px;
  text-shadow: 0px 3px 6px #00000029;
`;

const HorizontalLine = styled.hr`
  margin: 15px 0px;
  width: 180px;
`;

const SubHeader = styled.h2`
  display: grid;
  letter-spacing: -0.5px;
`;

export default function MainLogo() {
  return (
    <Container>
      <Logo src={logo} alt="fabstr" />
      <Header>Fabstr.</Header>
      <HorizontalLine />
      <SubHeader>Therapeutic Fasting</SubHeader>
    </Container>
  );
}
