import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";
import "../../components/Tarefas/listaTarefas.css"
import Layout from "../../components/Layout";
import { useState } from "react";
import { Button, ChakraProvider, Input, VStack } from "@chakra-ui/react";
import ListaDeTarefas from "../../components/Tarefas/ListaTarefas";
function ListaTarefas () {
    const [tarefas, setTarefas] = useState([
        { nome: 'Tarefa 1', pendente: true },
        { nome: 'Tarefa 2', pendente: true },
        { nome: 'Tarefa 3', pendente: true },
      ]);
      const [novaTarefa, setNovaTarefa] = useState('');
    
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
      const handleAddTarefa = () => {
        if (novaTarefa.trim() !== '') {
          setTarefas([...tarefas, { nome: novaTarefa, pendente: true }]);
          setNovaTarefa('');
        }}
    return (
    <Layout>
      <div className="lista-tarefas-container">
      <ChakraProvider cssVarsRoot={undefined}>
      <VStack align="start" spacing={4}>
        <Input
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
        />
        <Button onClick={handleAddTarefa}>Adicionar Tarefa</Button>
        <ListaDeTarefas
          tarefas={tarefas}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      </VStack>
      </ChakraProvider>
      <div>
      <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
      </div>
      </div>
      </Layout>
    )
}
export default ListaTarefas;