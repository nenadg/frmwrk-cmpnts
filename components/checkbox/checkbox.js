import "./checkbox.css";
import { bundle } from "@nenadg/frmwrk";
import CheckBoxModel from "./checkbox.model.js";

const CheckBox = {
  name: "CheckBox",
  type: "component",
  config: {
    div: {
      model: "CheckBox",
      oninitelement: "CheckBox::oninitelement",
      className: "frmwrk-checkbox {*:checkboxChecked}",
      children: [
        {
          input: {
            type: "checkbox",
            name: "{*:checkboxName}",
            checked: "{*:checkboxChecked}",
            disabled: "{*:checkboxDisabled}"
          }
        },
        {
          label: {
            onclick: "CheckBox::onchange",
            innerText: "{*:checkboxTitle}",
            for: "{*:checkboxName}"
          }
        }
      ]
    }
  }
};

bundle([CheckBoxModel, CheckBox]);

export default CheckBox;
