import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css';
import FormmularioCadastro from "./components/FomularioCadastro";
import ListaDeCategorias from './components/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);

    this.setState({notas: arrayNotas})
    
  }

  render() {
      return ( 
        <section className="conteudo">
          <FormmularioCadastro criarNota={this.criarNota.bind(this)}/>
          <main className="conteudo-principal">
            <ListaDeCategorias adicionarCategoria={this.adicionarCategoria.bind(this)} categorias={this.state.categorias}/>
            <ListaDeNotas notas={this.state.notas} apagarNota={this.deletarNota.bind(this)}/>
          </main>
        </section >

      );
  }
}

export default App;