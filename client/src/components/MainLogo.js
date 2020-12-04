import styled from "styled-components/macro";

import logo from "../assets/icon/fabstr.png";

const Logo = styled.img`
  width: 175px;
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
`;

const SubHeader = styled.h2`
  display: grid;
`;

export default function MainLogo() {
  return (
    <>
      <Logo src={logo} alt="fabstr" />
      <Header>Fabstr.</Header>
      <HorizontalLine />
      <SubHeader>Therapeutic Fasting</SubHeader>
    </>
  );
}
