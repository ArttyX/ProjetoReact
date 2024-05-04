import { Button, Checkbox, Flex, Input } from "@chakra-ui/react"
import { useState } from "react"
import api from "../../../helpers/axios"
import { PostTarefa } from "../../../interfaces/tarefas"
interface FormTarefaProps {
    carregarLista():void
}

function FormTarefa({carregarLista}: FormTarefaProps){
    const [nomeTarefa, setNomeTarefa] = useState('')
    const [realizadaTarefa, setRealizadaTarefa] = useState(false)
    
    function adicionarTarefa(){
      if(nomeTarefa !=''){
        const novaTarefa:PostTarefa = {
            title:nomeTarefa,
            completed: realizadaTarefa
        }
        api.post('/task',novaTarefa)
        .then(() =>{
            setNomeTarefa('')
            carregarLista()
        })
      }
    }
   
    return (
        <Flex alignItems='center' justifyContent='space-around'>
            <Input
            value={nomeTarefa}
            onChange={(evento) => setNomeTarefa(evento.target.value)}
            placeholder="Título da tarefa" 
            size='md' />
            <Checkbox onChange={(evento) => setRealizadaTarefa(evento.target.checked)} marginRight={3} marginLeft={3}>Realizado?</Checkbox>
            <Button onClick={adicionarTarefa} colorScheme="blue" variant='outline'>Adicionar</Button>
        </Flex>
    )
}

export default FormTarefa