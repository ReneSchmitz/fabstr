import { InputPassword } from "./inputPassword";
import { HeaderFour } from "./inputPassword";
import { Icon } from "./inputPassword";
import { InputPwd } from "./inputPassword";

import Lock from "../stories/assets/icon/lock.svg";

export default {
  title: "Component/InputPassword",
  component: InputPassword,
};

export const Input_Password = () => {
  return (
    <>
      <InputPassword>
        <HeaderFour>Password</HeaderFour>
        <>
          <Icon src={Lock} alt="lock" />

          <InputPwd type="password" placeholder="*************" />
        </>
      </InputPassword>
    </>
  );
};
