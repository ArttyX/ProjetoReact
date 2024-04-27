import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";
import "../../components/Contact/contato.css"
import InputFatec from "../../components/input-fatec";
import Layout from "../../components/Layout";
import { Flex, Heading } from '@chakra-ui/react'
function Contato(){
    return (
      <Layout>
      <div className="contato-container">
      <Heading marginBottom={3}>Contato</Heading>
      <div className="option-container">
          <InputFatec type="text" placeHolder="Nome" defaultValue={''} />
        </div>
        <div className="option-container">
          <InputFatec type="email" placeHolder="E-mail" defaultValue={''} />
        </div>
        <div className="option-container">
          <InputFatec type="tel" placeHolder="Telefone" defaultValue={''} />
        </div>
        <ButtonFatec type='button' label={"Enviar"}></ButtonFatec>
      <Flex display='flex' alignContent='center' justifyContent='center' marginTop='10px'>
      <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
      </Flex>
    </div>
    </Layout>
    )
}
export default Contato;
