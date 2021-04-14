import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css';
import FormmularioCadastro from "./components/FomularioCadastro";
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
      return ( 
        <section className="conteudo">
          <FormmularioCadastro criarNota={this.criarNota.bind(this)}/>
          <ListaDeNotas notas={this.state.notas}/>
        </section >

      );
  }
}

export default App;