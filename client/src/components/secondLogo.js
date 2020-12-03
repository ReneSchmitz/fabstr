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

export const SecondLogo = () => {
  return (
    <>
      <Logo src={logo} alt="fabstr" />
      <Header>Fabstr.</Header>
    </>
  );
};
