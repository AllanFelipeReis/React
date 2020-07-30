function Componente1(){

  return(
    <div className="Componente1">
      <Componente2>
        <Componente4 name = 'Allan Reis'/>
      </Componente2>
    </div>
  )
}

function Componente2(props){
  return(
    <div className ="Componente2">
      {props.children}
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

function Componente4(props){
  return(
      <h1 className="Componente4">
        <p>
          {props.name}
        </p>
      </h1>
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
