import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec"
import "../../components/Home/home.css"
function Home() {
    return (
        <div className="home-container"> 
        <h1>Bem vindo a Página Inicial!</h1>
        <p>Este site é um projeto que visa compreender formas de criação de sites!</p>
        <div>
        <Link to= {'/sobre'}><ButtonFatec type={"button"} label={"Ir para Sobre"}></ButtonFatec></Link>
        <Link to= {'/Contato'}><ButtonFatec type={"button"} label={"Ir para Contato"}></ButtonFatec></Link>
        <Link to= {'/Tarefas'}><ButtonFatec type={"button"} label={"Ir para Tarefas"}></ButtonFatec></Link>
        </div>
        </div>
    )

}
export default Home
