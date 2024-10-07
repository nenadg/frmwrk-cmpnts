import "./modal.css";
import { bundle } from "@nenadg/frmwrk";
import ModalHeader from "./modal.header.js";
import ModalContent from "./modal.content.js";
import ModalFooter from "./modal.footer.js";
import ModalModel from "./modal.model.js";

const Modal = {
  name: "Modal",
  type: "component",
  config: {
    div: {
      model: "Modal",
      oninitelement: "Modal::oninitelement",

      "data-alive": "{*:alive}",
      className: "frmwrk-modal modal-overlay",

      children: [
        {
          div: {
            className: "modal-dropzone",
            children: [
              {
                div: {
                  className: "modal-movable",
                  style: "position: {*:position}; top: {*:top}px; left: {*:left}px; z-index: 10",
                  children: ["Modal.Header", "Modal.Content", "Modal.Footer"]
                }
              }
            ]
          }
        }
      ]
    }
  }
};

bundle([ModalHeader, ModalContent, ModalFooter, ModalModel]);

export default Modal;
