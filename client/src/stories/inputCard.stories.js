import { InputCard } from "./inputCard";
import { HeaderFour } from "./inputCard";
import { Icon } from "./inputCard";
import { InputPwd } from "./inputCard";

import Lock from "../../src/stories/assets/icon/lock.svg";

export default {
  title: "Component/InputCard",
  component: InputCard,
};

export const Input_Card = () => {
  return (
    <>
      <InputCard>
        <HeaderFour>Password</HeaderFour>
        <>
          <Icon src={Lock} alt="lock" />

          <InputPwd type="password" placeholder="*************" />
        </>
      </InputCard>
    </>
  );
};
