import { SecondLogo } from "./secondLogo";
import { Header } from "./secondLogo";

import logo from "../assets/icon/fabstr.png";

export default {
  title: "Component/SecondLogo",
  component: SecondLogo,
};

export const Second_Logo = () => {
  return (
    <>
      <SecondLogo src={logo} alt="logo" />
      <Header>Fabstr.</Header>
    </>
  );
};
