import "./datalist.css";
import TextField from "../textfield/textfield.js";
import { bundle } from "@nenadg/frmwrk";
import DataListModel from "./datalist.model.js";

const DataList = {
  name: "DataList",
  type: "component",
  config: {
    div: {
      model: "DataList",
      oninitelement: "DataList::oninitelement",

      className: "frmwrk-datalist",
      children: [
        {
          TextField: {
            onkeyup: "DataList::onfilterout",
            meta: {
              placeholder: "filterTextPlaceholder",
              inputName: "filterText",
              inputLabel: "filterLabel"
            }
          }
        },
        {
          datalist: {
            children: [
              {
                "@{*:people}": {
                  option: {
                    value: "{*:people[*:people.name]}",
                    innerText: "{*:people[*:people.name]}"
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
};

bundle([DataListModel, DataList]);

export default DataList;
