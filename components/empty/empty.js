const Empty = {
  name: 'Empty',
  type: 'component',
  config: {
    div: {
      model: 'Empty',
      oninitelement: 'Empty::oninitelement',
      innerText: 'a {*:innerText} b {*:zik}'
    }
  }
};

export default Empty;
