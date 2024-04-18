import { useState } from "react";
import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";

function ListaTarefas () {
    const [tarefas] = useState([
        "1: Criar Site",
        "2: Deixar Bonito",
        "3: Postar Site",
      ]);
    return (
<div className="lista-tarefas-container">
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
    </div>
    )
}
export default ListaTarefas;