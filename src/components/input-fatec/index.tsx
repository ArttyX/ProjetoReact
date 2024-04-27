import styles from './index.module.css'
import { Flex, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
interface Props{
    defaultValue: string
    type: 'text' | 'email' | 'tel'
    placeHolder: string
}

function InputFatec({defaultValue, type, placeHolder}: Props) {
    return (
        <Flex alignItems="center" justifyContent="center">
        <InputGroup>
        <InputLeftAddon>{placeHolder}</InputLeftAddon>
        <Input size='auto' width='auto' borderRadius={5}
        className={styles.Input}
        type={type} 
        placeholder={placeHolder}
        defaultValue={defaultValue}
        style={{ color: 'black'}}
        />
        </InputGroup>
        </Flex>
    )
}

export default InputFatec