import Button from "../button/button.js";

const ModalFooter = {
  name: "Modal.Footer",
  type: "component",
  config: {
    div: {
      className: "modal-footer",
      children: [
        {
          div: {
            children: [
              {
                Button: {
                  meta: {
                    innerText: "footerButtonText"
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

export default ModalFooter;
