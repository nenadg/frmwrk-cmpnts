const GridBodyColumn = {
  name: 'Grid.Body.Column',
  type: 'component',
  config: {
    td: {
      className: 'truncate',
      title: '{*:grid_rows.?[*:grid_header.data_index]}',
      innerText: '{*:grid_rows.?[*:grid_header.data_index]}'
    }
  }
};

export default GridBodyColumn;
