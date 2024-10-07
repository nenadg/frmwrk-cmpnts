import CheckBox from "../checkbox/checkbox.js";

const ModalHeader = {
  name: "Modal.Header",
  type: "component",
  config: {
    div: {
      className: "modal-header",

      children: [
        {
          div: {
            className: "titlebar",
            children: [
              {
                CheckBox: {
                  meta: {
                    checkboxChecked: "checkboxChecked",
                    checkboxTitle: "checkboxTitle",
                    checkboxName: "checkboxName",
                    checkboxDisabled: "checkboxDisabled"
                  },

                  onclick: "Modal::onclose"
                }
              }
            ]
          }
        }
      ]
    }
  }
};

export default ModalHeader;
