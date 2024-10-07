const SimpleGridBody = {
  name: 'SimpleGridBody',
  type: 'component',
  config: {
    tbody: {
      children: [
        {
          '@{*:rows}': {
            tr: {
              id: 'id-{*:rows[*:rows.index]}',
              children: [
                {
                  td: {
                    className: 'id',
                    innerText: '{*:rows[*:rows.index]}'
                  }
                },
                {
                  td: {
                    className: 'value',
                    innerText: '{*:rows[*:rows.value]}'
                  }
                },
                {
                  td: {
                    className: 'name',
                    innerText: '{*:rows[*:rows.name]}'
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
};

export default SimpleGridBody;