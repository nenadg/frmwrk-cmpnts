import { bundle, render, waitUntil } from "@nenadg/frmwrk";
import TextField from "../textfield/textfield.js";

bundle([TextField]);
const ModalModel = {
  name: "Modal",
  type: "model",
  config: {
    oninitelement: async (model, state) => {
      model.update({
        alive: true,

        top: "",
        left: "",

        checkboxChecked: "checked",
        checkboxTitle: "Modal window title",
        checkboxName: "modalCheckBox",
        checkboxDisabled: "",

        footerButtonText: "Close"
      });
    },

    onclose: (model, state) => {
      model.unload();
    }
  }
};

export default ModalModel;
