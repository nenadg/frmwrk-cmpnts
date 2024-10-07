const SwitchModel = {
  name: 'Switch',
  type: 'model',
  config: {
    oninitelement: model => {
      model.update({
        switchName: 'switch',
        switchChecked: '',
        switchTitle: 'Switch'
      });
    },
    onchange: async model => {
      const data = model.getData();
      const checked = data.switchChecked === 'checked' ? '' : 'checked';
      
      model.update({switchChecked: checked});
    }
  }
};

export default SwitchModel;
