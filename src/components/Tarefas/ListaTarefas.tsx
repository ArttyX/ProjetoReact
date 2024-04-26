import { VStack, HStack, Button, Text } from '@chakra-ui/react';
interface Tarefa {
    nome: string;
    pendente: boolean;
  }
  
  interface ListaDeTarefasProps {
    tarefas: Tarefa[];
    onDelete: (index: number) => void;
    onToggleStatus: (index: number) => void;
  }
  const ListaDeTarefas: React.FC<ListaDeTarefasProps> = ({ tarefas, onDelete, onToggleStatus }) => {
    return (
      <VStack align="start" spacing={4}>
        {tarefas.map((tarefa, index) => (
          <HStack key={index}>
            <Text>{tarefa.nome}</Text>
            <Button colorScheme='red' variant='outline' onClick={() => onToggleStatus(index)}>
              {tarefa.pendente ? 'Concluir' : 'Pendente'}
            </Button>
            <Button  colorScheme='red' variant='outline' onClick={() => onDelete(index)}>Excluir</Button>
          </HStack>
        ))}
      </VStack>
    );
  };
  
export default ListaDeTarefas;