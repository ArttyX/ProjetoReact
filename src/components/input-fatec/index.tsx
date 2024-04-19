import styles from './index.module.css'

interface Props {
    defaultValue: string
    type: 'text' | 'email' | 'tel'
    placeHolder: string
}

function InputFatec({defaultValue, type, placeHolder}: Props) {
    return (
        <input 
        className={styles.inputFatec}
        type={type} 
        placeholder={placeHolder}
        defaultValue={defaultValue}
        style={{ color: 'red' }}
        />
    )
}

export default InputFatec