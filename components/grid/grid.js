const Grid = {
  name: "Grid",
  type: "component",
  config: {
    table: {
      className: "frmwrk-grid",
      style: "overflow: auto",
      // oninitelement: 'Controller.Grid::registerScroll',
      children: [
        "Grid.Header",
        "Grid.Body"
        // 'Grid.Paging'
      ]
    }
  }
};

export default Grid;
