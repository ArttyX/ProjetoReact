import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";
import "../../components/Tarefas/listaTarefas.css"
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import ListaDeTarefas from "../../components/Tarefas/ListaTarefas";
import FormTarefa from "../../components/Tarefas/formTarefas";
import { Tarefa } from "../../interfaces/tarefas";

function ListaTarefas () {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
])
function carregarLista() {
  return[
    {id: 1, nome: "Tarefa 1", concluida: false},
    {id: 2, nome: "Tarefa 2", concluida: false}
  ]
}
useEffect(() =>{
  const tarefas = carregarLista()
  setTarefas(tarefas)
},[])

function apagarTarefas (id:number){
  const tarefasAtualizadas = tarefas.filter((tarefa)=> tarefa.id !==id)
  setTarefas(tarefasAtualizadas)
}
    return (
    <Layout>
      <div className="lista-tarefas-container">
      <FormTarefa tarefas={tarefas} setTarefas={setTarefas} />
            {
                tarefas.map((tarefa) => (
                    <ListaDeTarefas 
                    key={tarefa.id}
                    titulo={tarefa.nome} 
                    idTarefa={tarefa.id}
                    apagarTarefa={apagarTarefas} />
                ))
            }
      <div>
      <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
      </div>
      </div>
      </Layout>
    )
}
export default ListaTarefas;