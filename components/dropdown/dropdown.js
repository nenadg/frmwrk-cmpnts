import "./dropdown.css";
import { bundle } from "@nenadg/frmwrk";
import DropdownModel from "./dropdown.model.js";

const Dropdown = {
  type: "component",
  name: "Dropdown",
  config: {
    div: {
      className: "frmwrk-dropdown {*:isVisible}",
      oninitelement: "Dropdown::oninitelement",
      model: "Dropdown",
      children: [
        {
          div: {
            className: "dropdown",
            children: [
              {
                input: {
                  type: "text",
                  readOnly: "true",
                  name: "dropdown",
                  style: "cursor: pointer",
                  placeholder: "Select...",
                  tabIndex: 4,
                  onfocus: "Dropdown::focus",
                  onblur: "Dropdown::blur"
                }
              },
              {
                span: {
                  innerText: ""
                }
              },

              {
                ul: {
                  for: "dropdown",
                  children: [
                    {
                      "@{*:elements}": {
                        li: {
                          className: "{*:elements[*:elements.selected]}",
                          innerText: "{*:elements[*:elements.text]}",
                          onclick: "Dropdown::select"
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          label: {
            for: "dropdown",
            style: "color: {*:selectionColor}",
            textContent: "{*:selectionText}"
          }
        }
      ]
    }
  }
};

bundle([DropdownModel, Dropdown]);

export default Dropdown;
