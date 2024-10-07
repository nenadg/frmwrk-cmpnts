import "./textfield.css";
import { bundle } from "@nenadg/frmwrk";
import TextFieldModel from "./textfield.model.js";

const TextField = {
  name: "TextField",
  type: "component",
  config: {
    div: {
      model: "TextField",
      oninitelement: "TextField::oninitelement",
      className: "frmwrk-textfield",
      children: [
        {
          input: {
            placeholder: "{*:placeholder}",
            type: "text",
            name: "{*:inputName}"
          }
        },
        {
          label: {
            for: "{*:inputName}",
            innerText: "{*:inputLabel}"
          }
        }
      ]
    }
  }
};

bundle([TextFieldModel, TextField]);

export default TextField;
