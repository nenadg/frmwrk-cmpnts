const EmptyModel = {
  name: 'Empty',
  type: 'model',
  config: {
    oninitelement: (model, ...data) => {
      model.update({
        innerText: 'op 1',
        zik: 'first 2'
      });

      setTimeout(() => {
        console.log('upd')
        model.update({
          innerText: 'second 1',
          zik: 'second 2'
        });
      }, 3000)
    }
  }
};

export default EmptyModel;
