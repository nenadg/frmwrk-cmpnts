const GridHeaderSelector = {
  name: 'Grid.Header.Selector',
  type: 'component',
  config: {
    th: {
      children: [
        {
          label: {
            for: 'grid-datatable-checkbox',
            children: [
              {
                input: {
                  name: 'grid-datatable-checkbox',
                  type: 'checkbox'
                  // onclick: 'Controller.Grid::selectAll'
                }
              }
            ]
          }
        }
      ]
    }
  }
};

export default GridHeaderSelector;
