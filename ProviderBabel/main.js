const NameContext = React.createContext('my');

function Componente1(){

  const my = {
    firstName: 'Allan',
    lastName: 'Reis'
  }

  return(
    <NameContext.Provider value={my}>
      <div className="Componente1">
        <Componente2 />
      </div>
    </NameContext.Provider>

  )
}
function Componente2(){
  return(
    <div className ="Componente2">
      <Componente3 />
    </div>
  )
}
function Componente3(){

  return(
    <div className="Componente3">
      <Componente4 />
    </div>
  )
}
function Componente4(){
  return(
    <NameContext.Consumer>
      {(my) => (
        <h1 className="Componente4">
          <p>
            {my.firstName + ' ' + my.lastName}
          </p>
        </h1>
      )}
    </NameContext.Consumer>
  )
}

function MeuPrimeiroComponente(){
  return(
    <h1>
      'Hello World'
    </h1>
  )
}

ReactDOM.render(
  <Componente1 />,
  document.getElementById('app')
)
