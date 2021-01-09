import { useState } from "react";
import Checkbox from "../assets/icon/checkbox.svg";
import CheckboxChecked from "../assets/icon/checkboxGrey.svg";

export default function GetCheckBoxGrey() {
  const [isChecked, setIsChecked] = useState(false);
  const CheckboxSrc = !isChecked ? Checkbox : CheckboxChecked;
  const CheckboxAlt = !isChecked ? "Checkbox" : "Checkbox is ticked";

  return (
    <img
      src={CheckboxSrc}
      alt={CheckboxAlt}
      onClick={() => setIsChecked(!isChecked)}
    />
  );
}
