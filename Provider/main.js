const NameContext = React.createContext('my');

function Componente1(){
  const my = {
    firstName: 'Allan',
    lastName: 'Reis'
  }

  return(React.createElement(NameContext.Provider, {value: my},
      React.createElement('div', {className: 'Componente1'},
        React.createElement(Componente2)
      )
    )
  )
}
function Componente2(){
  return (
    React.createElement('div', {className: 'Componente2'},
      React.createElement(Componente3)
    )
  )
}
function Componente3(){
  return (
    React.createElement('div', {className: 'Componente3'},
      React.createElement(Componente4)
    )
  )
}
function Componente4(){
  return (
    React.createElement(NameContext.Consumer, null,
      (my) => (
        React.createElement('h1', {className: 'Componente4'},
          React.createElement('p', null, my.firstName + ' ' + my.lastName)
        )
      )
    )
  )
}

function MeuPrimeiroComponente(){
  return React.createElement('h1', null, 'Hello World!')
}

ReactDOM.render(
  React.createElement(Componente1),
  document.getElementById('app')
)
