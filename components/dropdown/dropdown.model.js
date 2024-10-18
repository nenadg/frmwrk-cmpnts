const DropdownModel = {
  name: "Dropdown",
  type: "model",
  config: {
    oninitelement: async (model) => {
      model.update({
        isVisible: "",
        selectionText: "Selection",
        selectionColor: "inherit",
        onSelectEvent: "Dropdown::select",
        onFocusEvent: "Dropdown::focus",
        onBlurEvent: "Dropdown::blur"
      });
    },

    select: (model, state) => {
      let selected = state.filter((el) => el.prop === "text").pop();

      model.update({ selectionText: selected.value, selectionColor: selected.value.toLowerCase() });
    },

    focus: (model) => {
      let update = {
        isVisible: "is-visible",
        elements: [
          {
            selected: "",
            text: "Red"
          },
          {
            selected: "",
            text: "Blue"
          },
          {
            selected: "",
            text: "Green"
          },
          {
            selected: "",
            text: "Gray"
          },
          {
            selected: "",
            text: "Black"
          }
        ]
      };

      model.update(update);
    },

    blur: (model) => {
      // blur on the <input> is fired before
      // ::select on list, so we have to wait
      // for ::select to trigger, than close the dropdown
      setTimeout(() => {
        model.update({
          isVisible: "",
          elements: []
        });
      }, 150);
    }
  }
};

export default DropdownModel;
