import "./switch.css";
import { bundle } from "@nenadg/frmwrk";
import SwitchModel from "./switch.model.js";

const Switch = {
  name: "Switch",
  type: "component",
  config: {
    label: {
      model: "Switch",
      implicit: true,
      oninitelement: "Switch::oninitelement",
      className: "frmwrk-switch {*:switchChecked}",
      onchange: "Switch::onchange",
      children: [
        {
          input: {
            type: "checkbox",
            name: "{*:switchName}",
            value: "{*:switchChecked}",
            checked: "{*:switchChecked}"
          }
        },
        {
          div: {
            className: "wrap",
            children: [
              {
                div: {
                  className: "track"
                }
              },
              {
                div: {
                  className: "thumb",
                  children: [
                    {
                      span: {
                        className: "focus-helper"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          span: {
            className: "label",
            innerText: "{*:switchTitle}",
            for: "{*:switchName}"
          }
        }
      ]
    }
  }
};

bundle([SwitchModel, Switch]);

export default Switch;
