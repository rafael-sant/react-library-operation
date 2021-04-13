import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css';
import FormmularioCadastro from "./components/FomularioCadastro";
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {
    render() {
        return ( 
          <section className="conteudo">
            <FormmularioCadastro/>
            <ListaDeNotas></ListaDeNotas>
          </section >

        );
    }
}

export default App;