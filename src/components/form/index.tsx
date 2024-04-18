import ButtonFatec from "../button-fatec"
import InputFatec from "../input-fatec"

function Form(){
    return (
        <>
            <InputFatec type="text" defaultValue="" placeHolder="Nome" />
            <br />
            <InputFatec type="text" defaultValue="" placeHolder="E-mail" />
            <br />
            <InputFatec type="text" defaultValue="" placeHolder="Telefone" />
            <br />
            <ButtonFatec type="button" label="Botao 1" />
        </>
    )
}

export default Form