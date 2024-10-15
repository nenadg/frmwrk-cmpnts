const TextFieldModel = {
  name: "TextField",
  type: "model",
  config: {
    oninitelement: (model) => {
      model.update({
        placeholder: "Placeholder text",
        inputName: "textfield",
        inputLabel: "TextField",
        onChangeEvent: "TextField::OnChange"
      });
    },

    OnChange: () => {
      console.log("change");
    }
  }
};

export default TextFieldModel;
