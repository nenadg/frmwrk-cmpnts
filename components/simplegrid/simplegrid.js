import { bundle } from "@nenadg/frmwrk";
import SimpleGridModel from "./simplegrid.model.js";
import Button from "../button/button.js";
import SimpleGridHeader from "./parts/simplegrid.header.js";
import SimpleGridBody from "./parts/simplegrid.body.js";

const SimpleGrid = {
  name: "SimpleGrid",
  type: "component",
  config: {
    div: {
      model: "SimpleGrid",
      className: "simplegrid-container",
      oninitelement: "SimpleGrid::oninitelement",
      children: [
        {
          table: {
            children: [SimpleGridHeader, SimpleGridBody]
          }
        }
      ]
    }
  }
};

bundle([SimpleGridModel, SimpleGridHeader, SimpleGridBody, SimpleGrid]);

export default SimpleGrid;
