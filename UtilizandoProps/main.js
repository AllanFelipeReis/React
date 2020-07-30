// Toda function e' um componente no React
function Componente1(){
  const firstName = 'Allan';
  const lastName = 'Reis';
    return (
      React.createElement('div', {className: 'Componente1'},
      // React.createElement cria o elemento recebendo 3 parametros (tag, atributos, o conteudo)
        React.createElement(Componente2, {firstName: firstName, lastName: lastName})
        // Neste caso e' passado outro componente com argumentos para o componente
      )
    )
}
function Componente2(props){
  // O componente recebe os argumentos que por convencao se utiliza props
  return (
    React.createElement('div', {className: 'Componente2'},
      React.createElement(Componente3, props)
    )
  )
}
function Componente3(props){
  return (
    React.createElement('div', {className: 'Componente3'},
      React.createElement(Componente4, props)
    )
  )
}
function Componente4(props){
  return (
    React.createElement('h1', {className: 'Componente4'},
      props.firstName + ' ' + props.lastName
    )
  )
}

function MeuPrimeiroComponente(){
  return React.createElement('h1', {style: {color: 'green'} }, 'Hello World!')
}

// Renderiza o elemento recebe 2 argumentos (componente, e o local do DOM)
ReactDOM.render(
  React.createElement(Componente1),
  document.getElementById('app')
)
