const GridBodyRowSelector = {
  name: 'Grid.Body.Row.Selector',
  type: 'component',
  config: {
    td: {
      children: [
        {
          label: {
            for: 'grid-datatable-checkbox-in',
            children: [
              {
                input: {
                  name: 'grid-datatable-checkbox-in',
                  type: 'checkbox'
                }
              }
            ]
          }
        }
      ]
    }
  }
};

export default GridBodyRowSelector;
