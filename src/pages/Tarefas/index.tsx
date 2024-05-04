import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";
import "../../components/Tarefas/listaTarefas.css"
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import ListaDeTarefas from "../../components/Tarefas/ListaTarefas";
import FormTarefa from "../../components/Tarefas/formTarefas";
import { Tarefa } from "../../interfaces/tarefas";
import api from "../../helpers/axios";

function ListaTarefas () {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
])
async function carregarLista() {
  const resposta = await api.get('/task')
  if(resposta.status == 200) {
    setTarefas(resposta.data)
  }
}
useEffect(() =>{
  carregarLista()
},[])

function apagarTarefas (id:number){
  api.delete(`/task/${id}`)
  .then(resposta=> {
    if(resposta.status==204){
    carregarLista()
    }else{
      alert('Erro ao Remover!')
    }
  })
  .catch(erro => {
    console.log(erro)
  })
}
function alterarStatus(tarefa:Tarefa){
  tarefa.completed = !tarefa.completed
  api.put(`/task/${tarefa.id}`,tarefa)
  .then(() => {
    carregarLista()
  })
}
    return (
    <Layout>
      <div className="lista-tarefas-container">
      <FormTarefa carregarLista={carregarLista} />
            {
                tarefas.map((tarefa) => (
                    <ListaDeTarefas 
                    key={tarefa.id}
                    tarefa={tarefa}
                    apagarTarefa={apagarTarefas}
                    alterarStatus={alterarStatus} />
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