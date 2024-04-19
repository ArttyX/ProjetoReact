import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";
import "../../components/Tarefas/listaTarefas.css"
import Topo from "../../components/Topo";
function ListaTarefas () {
    return (
        <>
        <Topo />
<div className="lista-tarefas-container">
      <h1>Lista de Tarefas</h1>
      <p>1: Fazer Site</p>
      <p>2: Deixar Bonito</p>
      <p>3: Subir o Site</p>
      <div>
      <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
      </div>
    </div>
    </>
    )
}
export default ListaTarefas;