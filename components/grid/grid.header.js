const GridHeader = {
  name: 'Grid.Header',
  type: 'component',
  config: {
    thead: {
      children: [
        {
          tr: {
            children: [
              'Grid.Header.Selector',
              {
                '@{*:grid_header}': {
                  th: {
                    innerText: '{*:grid_header.header_text}',
                    onclick: 'Grid::sort',
                    className: '{*:grid_header.sort_direction}'
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

export default GridHeader;
