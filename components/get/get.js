const listener = (a, b) => a(b.currentTarget);

const get = (address, type, callback, body) => {
  const req = new XMLHttpRequest();
  req.withCredentials = true;
  req.addEventListener("load", listener.bind(null, callback));
  req.open(type, address);
  if (type === "POST") {
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    return req.send(JSON.stringify(body));
  }
  req.send();
};

export default {
  name: "get",
  fn: get
};
