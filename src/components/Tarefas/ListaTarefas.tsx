import { Box, Button, Grid } from "@chakra-ui/react"
import { Tarefa } from "../../interfaces/tarefas"
  
  interface ListaDeTarefasProps {
    tarefa:Tarefa
    apagarTarefa (id: number): void
    alterarStatus(tarefa:Tarefa):void
  }
  function ListaDeTarefas({tarefa,apagarTarefa,alterarStatus}:ListaDeTarefasProps){
    return (    
        <Grid templateColumns='3fr 1fr' 
        p={2} backgroundColor='#f0f0f0' my={3}
        border='1px solid red' borderRadius='10px' 
        textAlign={"left"} borderStyle='groove' alignItems='center'>
            <Box>
                {tarefa.id} - {tarefa.title}
            </Box>
            <Box>
                <Button onClick={() => alterarStatus(tarefa)} colorScheme={tarefa.completed ? 'green' : 'purple'} variant='outline' marginRight={2} height='40px'>{tarefa.completed ? 'Finalizada' : 'Pendente'}</Button>
                <Button onClick={() => apagarTarefa(tarefa.id)} colorScheme="red" variant='outline' marginRight={2} height='40px'>Remover</Button>
            </Box>
        </Grid>
    )
}

  
export default ListaDeTarefas;