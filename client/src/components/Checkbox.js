import { useState } from "react";
import Checkbox from "../assets/icon/checkbox.svg";
import CheckboxChecked from "../assets/icon/checkboxChecked.svg";

export default function GetCheckBox() {
  const [ischecked, setIsChecked] = useState(false);
  const CheckboxSrc = !ischecked ? Checkbox : CheckboxChecked;
  const CheckboxAlt = !ischecked ? "Checkbox" : "Checkbox is ticked";

  return (
    <img
      Src={CheckboxSrc}
      Alt={CheckboxAlt}
      onClick={() => setIsChecked(!ischecked)}
    />
  );
}
