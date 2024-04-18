import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec"

function Sobre() {
    return (
        <div className="sobre-container">
        <h1>Sobre Mim</h1>
        <p>Sou um estudante de ADS e planejo evoluir minhas habilidades!</p>
        <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
        </div>
    )

}
export default Sobre