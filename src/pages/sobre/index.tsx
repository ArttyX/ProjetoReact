import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec"
import "../../components/Sobre/sobre.css"
import Layout from "../../components/Layout"
import { Heading } from "@chakra-ui/react"
function Sobre() {
    return (
        <Layout>
        <div className="sobre-container">
        <Heading marginBottom={3}>Sobre</Heading>
        <p>Estudo/Prática de criação de sites, utilizando React, Vite, Chakra, entre outros.</p>
        <div>
        <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
        </div>
        </div>
        </Layout>
    )

}
export default Sobre