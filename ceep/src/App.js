import React, { Component } from 'react';
import FormmularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {
    render() {
        return ( 
          <section >
            <FormmularioCadastro/>
            <ListaDeNotas > </ListaDeNotas>
          </section >

        );
    }
}

export default App;