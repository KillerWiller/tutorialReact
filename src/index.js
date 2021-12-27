import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bootstrap from 'bootstrap'
import react from 'react';

function Encabezado(props){
  return (
    <react.Fragment>
      <h1>{props.titulo}</h1>
    </react.Fragment>
  )
}

function Contenedor(){
  return <Encabezado titulo="Este es el titulo de mi pagina REACT"/>
}



ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/

  <Contenedor/>,

  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
