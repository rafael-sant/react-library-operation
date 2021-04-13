import React, { Component } from "react";

class FormmularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea rows={15} placeholder="Escreva sua nota" />
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormmularioCadastro;