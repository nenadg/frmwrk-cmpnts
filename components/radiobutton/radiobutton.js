import "./radiobutton.css";
import { bundle } from "@nenadg/frmwrk";
import RadioButtonModel from "./radiobutton.model.js";

const RadioButton = {
  name: "RadioButton",
  type: "component",
  config: {
    div: {
      model: "RadioButton",
      oninitelement: "RadioButton::oninitelement",
      className: "frmwrk-radio {*:radioChecked}",
      onclick: "RadioButton::onclick",
      children: [
        {
          input: {
            type: "radio",
            name: "{*:radioName}",
            value: "{*:radioChecked}",
            checked: "{*:radioChecked}"
          }
        },
        {
          label: {
            for: "{*:radioName}",
            innerText: "{*:radioTitle}"
          }
        }
      ]
    }
  }
};

bundle([RadioButtonModel, RadioButton]);

export default RadioButton;
