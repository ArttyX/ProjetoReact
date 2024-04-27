import { Box, Button, Grid } from "@chakra-ui/react"
  
  interface ListaDeTarefasProps {
    titulo: string
    idTarefa: number
    apagarTarefa (id: number): void
  }
  function ListaDeTarefas({titulo,idTarefa,apagarTarefa}:ListaDeTarefasProps){
    return (
        <Grid templateColumns='3fr 1fr' 
        p={5} backgroundColor='silver' my={3}
        border='1px solid red' borderRadius='10px' textAlign={"left"}>
            <Box>
                {idTarefa} - {titulo}
            </Box>
            <Box>
                <Button colorScheme='green' variant='outline' marginRight={2}>Concluir</Button>
                <Button onClick={() => apagarTarefa(idTarefa)} colorScheme="red" variant='outline' marginRight={2}>Remover</Button>
            </Box>
        </Grid>
    )
}

  
export default ListaDeTarefas;