import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec"
import "../../components/Home/home.css"
import Layout from "../../components/Layout"
import { Flex, Heading, Text } from "@chakra-ui/react"
function Home() {
    return (
        <Layout>
        <Flex className="home-container"> 
        <Heading marginBottom={3}>Página Inicial</Heading>
        <Text marginBottom={5} marginTop={5} fontSize='medium'>Este site é um projeto que visa compreender formas de criação de sites!</Text>
        <Flex columnGap='20px'>
        <Link to= {'/sobre'}><ButtonFatec type={"button"} label={"Ir para Sobre"}></ButtonFatec></Link>
        <Link to= {'/Contato'}><ButtonFatec type={"button"} label={"Ir para Contato"}></ButtonFatec></Link>
        <Link to= {'/Tarefas'}><ButtonFatec type={"button"} label={"Ir para Tarefas"}></ButtonFatec></Link>
        </Flex>
        </Flex>
        </Layout>
    )

}
export default Home
