const ButtonModel = {
  name: 'Button',
  type: 'model',
  config: {
    oninitelement: (model, state, e) => {
      model.update({
        innerText: 'Button'
      });
    }
  }
};

export default ButtonModel;
