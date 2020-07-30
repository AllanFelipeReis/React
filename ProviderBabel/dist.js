const NameContext = React.createContext('my');

function Componente1() {
  const my = {
    firstName: 'Allan',
    lastName: 'Reis'
  }; // return(React.createElement(NameContext.Provider, {value: my},
  //     React.createElement('div', {className: 'Componente1'},
  //       React.createElement(Componente2)
  //     )
  //   )
  // )

  return /*#__PURE__*/React.createElement(NameContext.Provider, {
    value: my
  }, /*#__PURE__*/React.createElement("div", {
    className: "Componente1"
  }, /*#__PURE__*/React.createElement(Componente2, null)));
}

function Componente2() {
  // return (
  //   React.createElement('div', {className: 'Componente2'},
  //     React.createElement(Componente3)
  //   )
  // )
  return /*#__PURE__*/React.createElement("div", {
    className: "Componente2"
  }, /*#__PURE__*/React.createElement(Componente3, null));
}

function Componente3() {
  // return (
  //   React.createElement('div', {className: 'Componente3'},
  //     React.createElement(Componente4)
  //   )
  // )
  return /*#__PURE__*/React.createElement("div", {
    className: "Componente3"
  }, /*#__PURE__*/React.createElement(Componente4, null));
}

function Componente4() {
  // return (
  //   React.createElement(NameContext.Consumer, null,
  //     (my) => (
  //       React.createElement('h1', {className: 'Componente4'},
  //         React.createElement('p', null, my.firstName + ' ' + my.lastName)
  //       )
  //     )
  //   )
  // )
  return /*#__PURE__*/React.createElement(NameContext.Consumer, null, my => /*#__PURE__*/React.createElement("h1", {
    className: "Componente4"
  }, /*#__PURE__*/React.createElement("p", null, my.firstName + ' ' + my.lastName)));
}

function MeuPrimeiroComponente() {
  // return React.createElement('h1', null, 'Hello World!')
  return /*#__PURE__*/React.createElement("h1", null, "'Hello World'");
}

ReactDOM.render( /*#__PURE__*/React.createElement(Componente1, null), document.getElementById('app'));
