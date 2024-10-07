const TextFieldModel = {
  name: 'TextField',
  type: 'model',
  config: {
    oninitelement: (model, state) => {
      model.update({
        placeholder: 'Placeholder text',
      	inputName: 'textfield',
      	inputLabel: 'TextField'
      });
    }
  }
};

export default TextFieldModel;
