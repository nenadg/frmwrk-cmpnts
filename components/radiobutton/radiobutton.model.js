const RadioButtonModel = {
  name: "RadioButton",
  type: "model",
  config: {
    oninitelement: (model, state) => {
      model.update({
        radioChecked: "",
        radioName: "RadioButton",
        radioTitle: "RadioButton"
      });
    },

    onclick: (model, state) => {
      let data = model.getData();
      // NOTE: adapt commented code if you want radiobutton acting as checkbox
      let checked = "checked"; // data.radioChecked === 'checked' ? '' : 'checked';

      model.update({ radioChecked: checked });
    }
  }
};

export default RadioButtonModel;
