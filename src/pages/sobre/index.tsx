import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec"
import "../../components/Sobre/sobre.css"
import Layout from "../../components/Layout"
function Sobre() {
    return (
        <Layout>
        <div className="sobre-container">
        <h1>Sobre Mim</h1>
        <p>Sou um estudante de ADS e planejo evoluir minhas habilidades!</p>
        <div>
        <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
        </div>
        </div>
        </Layout>
    )

}
export default Sobre