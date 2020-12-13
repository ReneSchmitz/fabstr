import { useState } from "react";
import Checkbox from "../assets/icon/checkbox.svg";
import CheckboxChecked from "../assets/icon/checkboxChecked.svg";

export default function GetCheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  const CheckboxSrc = !isChecked ? Checkbox : CheckboxChecked;
  const CheckboxAlt = !isChecked ? "Checkbox" : "Checkbox is ticked";

  return (
    <img
      Src={CheckboxSrc}
      Alt={CheckboxAlt}
      onClick={() => setIsChecked(!isChecked)}
    />
  );
}
