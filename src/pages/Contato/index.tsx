import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";
import "../../components/Contact/contato.css"
import InputFatec from "../../components/input-fatec";
import Layout from "../../components/Layout";
import { Heading } from '@chakra-ui/react'
function Contato(){
    return (
      <Layout>
      <div className="contato-container">
      <Heading marginBottom={3}>Contato</Heading>
      <div className="option-container">
          <label>Nome: </label>
          <InputFatec type="text" placeHolder="Digite seu nome" defaultValue={''} />
        </div>
        <div className="option-container">
          <label>E-mail: </label>
          <InputFatec type="email" placeHolder="Digite seu e-mail" defaultValue={''} />
        </div>
        <div className="option-container">
          <label>Telefone: </label>
          <InputFatec type="tel" placeHolder="Digite seu telefone" defaultValue={''} />
        </div>
        <ButtonFatec type='button' label={"Enviar"}></ButtonFatec>
      <div>
      <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
      </div>
    </div>
    </Layout>
    )
}
export default Contato;
