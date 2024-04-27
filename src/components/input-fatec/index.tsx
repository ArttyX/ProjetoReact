import styles from './index.module.css'
import { Input } from '@chakra-ui/react'
interface Props{
    defaultValue: string
    type: 'text' | 'email' | 'tel'
    placeHolder: string
}

function InputFatec({defaultValue, type, placeHolder}: Props) {
    return (
        <Input size='sm' width='auto' borderRadius={5}
        className={styles.Input}
        type={type} 
        placeholder={placeHolder}
        defaultValue={defaultValue}
        style={{ color: 'black' }}
        />
    )
}

export default InputFatec