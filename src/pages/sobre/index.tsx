import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec"
import "../../components/Sobre/sobre.css"
import Layout from "../../components/Layout"
import { Heading, Text} from "@chakra-ui/react"
function Sobre() {
    return (
        <Layout>
        <div className="sobre-container">
        <Heading marginBottom={3}>Sobre</Heading>
        <Text marginBottom={5} marginTop={5} fontSize='medium'>Estudo/Prática de criação de sites, utilizando React, Vite, Chakra, entre outros.</Text>
        <div>
        <Link to= {'/'}><ButtonFatec type={"button"} label={"Voltar"}></ButtonFatec></Link>
        </div>
        </div>
        </Layout>
    )

}
export default Sobre