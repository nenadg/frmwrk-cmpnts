const GridBody = {
  name: 'Grid.Body',
  type: 'component',
  config: {
    tbody: {
      children: [
        {
          '@{*:grid_rows}': 'Grid.Body.Row'
        }
      ]
    }
  }
};

export default GridBody;
