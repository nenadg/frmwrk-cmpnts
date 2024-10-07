const CheckBoxModel = {
  name: "CheckBox",
  type: "model",
  config: {
    oninitelement: (model) => {
      model.update({
        checkboxName: "checkboxTest",
        checkboxChecked: "",
        checkboxTitle: "Checkbox ",
        checkboxDisabled: ""
      });
    },

    onchange: (model) => {
      const data = model.getData();
      const checked = data.checkboxChecked === "checked" ? "" : "checked";

      model.update({ checkboxChecked: checked });
    }
  }
};

export default CheckBoxModel;
