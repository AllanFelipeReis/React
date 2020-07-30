function Componente1() {
  return /*#__PURE__*/React.createElement("div", {
    className: "Componente1"
  }, /*#__PURE__*/React.createElement(Componente2, null, /*#__PURE__*/React.createElement(Componente4, {
    name: "Allan Reis"
  })));
}

function Componente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "Componente2"
  }, props.children);
}

function Componente3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "Componente3"
  }, /*#__PURE__*/React.createElement(Componente4, null));
}

function Componente4(props) {
  return /*#__PURE__*/React.createElement("h1", {
    className: "Componente4"
  }, /*#__PURE__*/React.createElement("p", null, props.name));
}

function MeuPrimeiroComponente() {
  return /*#__PURE__*/React.createElement("h1", null, "'Hello World'");
}

ReactDOM.render( /*#__PURE__*/React.createElement(Componente1, null), document.getElementById('app'));
