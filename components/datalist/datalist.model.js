const DataListModel = {
  name: "DataList",
  type: "model",
  config: {
    oninitelement: (model) => {
      model.update({
        filterTextPlaceholder: "Filter ...",
        filterText: "Filter",
        filterLabel: "Datalist",
        people: []
      });
    },

    onfilterout: (model, state, e) => {}
  }
};

export default DataListModel;
