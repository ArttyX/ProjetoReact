import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec";

function Contato(){
    return (
        <div className="contato-container">
      <h1>Entre em Contato</h1>
      <p>Você pode me contatar através do seguinte e-mail:</p>
      <p>Arthur@meusite.com</p>
      <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
    </div>
    )
}
export default Contato;
