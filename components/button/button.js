import "./button.css";
import { bundle } from "@nenadg/frmwrk";
import ButtonModel from "./button.model.js";

const Button = {
  name: "Button",
  type: "component",
  config: {
    button: {
      className: "frmwrk-button",
      model: "Button",
      oninitelement: "Button::oninitelement",
      innerText: "{*:innerText}"
    }
  }
};

bundle([ButtonModel, Button]);

export default Button;
