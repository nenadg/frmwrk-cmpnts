const SimpleGridHeader = {
  name: 'SimpleGridHeader',
  type: 'component',
  config: {
    thead: {
      children: [
        {
          tr: {
            children: [
              {
                th: {
                  innerText: 'Index'
                }
              },
              {
                th: {
                  innerText: 'Value'
                }
              },
              {
                th: {
                  innerText: 'Name'
                }
              }
            ]
          }
        }
      ]
    }
  }
};

export default SimpleGridHeader;