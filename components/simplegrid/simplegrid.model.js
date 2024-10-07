const SimpleGridModel = {
  name: "SimpleGrid",
  type: "model",
  config: {
    oninitelement: async (model) => {
      model.update({
        rows: [] // ... this would load data oninitielement, but it does later: SimpleGridModel.config.OnShowData(model),
      });
    },

    OnShowData: (model) => {}
  }
};

export default SimpleGridModel;
