import "./slider.css";
import { bundle } from "@nenadg/frmwrk";
import SliderModel from "./slider.model.js";

const Slider = {
  name: "Slider",
  type: "component",
  config: {
    div: {
      model: "Slider",
      className: "frmwrk-slider",
      oninitelement: "Slider::oninitelement",
      children: [
        {
          input: {
            name: "{*:sliderName}",
            oninput: "Slider::onchange",
            onchange: "Slider::onchange",
            type: "range",
            min: "{*:sliderMin}",
            max: "{*:sliderMax}",
            value: "{*:sliderValue}",
            step: "{*:sliderStep}"
          }
        },
        {
          label: {
            for: "{*:sliderName}",
            innerText: "{*:sliderValue}"
          }
        }
      ]
    }
  }
};

bundle([SliderModel, Slider]);

export default Slider;
