const GridBodyRow = {
  name: 'Grid.Body.Row',
  type: 'component',
  config: {
    tr: {
      // onclick: 'Controller.Grid::rowSelect',
      children: [
        'Grid.Body.Row.Selector',
        {
          '@{*:grid_header}': 'Grid.Body.Column'
        }
        // NOTE: removed action buttons
        // ,{
        //   '@{*:grid_action_buttons}': 'Grid.ActionButton'
        // }
      ]
    }
  }
};

export default GridBodyRow;
