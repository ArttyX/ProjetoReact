import styles from './index.module.css'

interface Props {
    defaultValue: string
    type: 'text' | 'email' | 'number'
    placeHolder: string
}

function InputFatec({defaultValue, type, placeHolder}: Props) {
    return (
        <input 
        className={styles.inputFatec}
        type={type} 
        placeholder={placeHolder}
        defaultValue={defaultValue}
        />
    )
}

export default InputFatec