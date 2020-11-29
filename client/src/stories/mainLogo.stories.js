import { MainLogo } from "./mainLogo";
import { Header } from "./mainLogo";
import { HorizontalLine } from "./mainLogo";
import { HeaderTwo } from "./mainLogo";

import logo from "../stories/assets/icon/fabstr.png";

export default {
  title: "Component/MainLogo",
  component: MainLogo,
};

export const Main_Logo = () => {
  return (
    <>
      <MainLogo src={logo} alt="logo" />
      <Header>Fabstr.</Header>
      <HorizontalLine />
      <HeaderTwo>Therapeutic Fasting</HeaderTwo>
    </>
  );
};
