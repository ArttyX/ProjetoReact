import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";
import "../../components/Tarefas/listaTarefas.css"
import Layout from "../../components/Layout";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ListaDeTarefas from "../../components/Tarefas/ListaTarefas";
function ListaTarefas () {
    const [tarefas, setTarefas] = useState([
        { nome: 'Tarefa 1', pendente: true },
        { nome: 'Tarefa 2', pendente: true },
        { nome: 'Tarefa 3', pendente: true },
      ]);
    
      const handleDelete = (index: number) => {
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);
        setTarefas(novasTarefas);
      };
    
      const handleToggleStatus = (index:number) => {
        const novasTarefas = [...tarefas];
        novasTarefas[index].pendente = !novasTarefas[index].pendente;
        setTarefas(novasTarefas);
      };
    return (
    <Layout>
<div className="lista-tarefas-container">
<ChakraProvider cssVarsRoot={undefined}>
      <ListaDeTarefas
        tarefas={tarefas}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
    </ChakraProvider>
      <div>
      <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
      </div>
    </div>
    </Layout>
    )
}
export default ListaTarefas;