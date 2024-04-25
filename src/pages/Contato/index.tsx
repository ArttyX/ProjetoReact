import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";
import "../../components/Contact/contato.css"
import InputFatec from "../../components/input-fatec";
import Layout from "../../components/Layout";
function Contato(){
    return (
      <Layout>
      <div className="contato-container">
      <h1>Contato</h1>
      <div>
          <label>Nome:</label>
          <InputFatec type="text" placeHolder="Digite seu nome" defaultValue={''} />
        </div>
        <div>
          <label>E-mail:</label>
          <InputFatec type="email" placeHolder="Digite seu e-mail" defaultValue={''} />
        </div>
        <div>
          <label>Telefone:</label>
          <InputFatec type="tel" placeHolder="Digite seu telefone" defaultValue={''} />
        </div>
        <ButtonFatec type='submit' label={"Enviar"}></ButtonFatec>
      <div>
      <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
      </div>
    </div>
    </Layout>
    )
}
export default Contato;
