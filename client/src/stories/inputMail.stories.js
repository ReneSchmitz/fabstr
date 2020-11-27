import { InputMail } from "./inputMail";
import { HeaderFour } from "./inputMail";
import { Icon } from "./inputMail";
import { InputPwd } from "./inputMail";

import mail from "../stories/assets/icon/mail.svg";

export default {
  title: "Component/InputMail",
  component: InputMail,
};

export const Input_Mail = () => {
  return (
    <>
      <InputMail>
        <HeaderFour>Email Address</HeaderFour>
        <>
          <Icon src={mail} alt="mail" />

          <InputPwd type="email" placeholder="Username@gmail.com" />
        </>
      </InputMail>
    </>
  );
};
