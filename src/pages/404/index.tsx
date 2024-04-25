import { Link } from "react-router-dom"
import Layout from "../../components/Layout"

function NotFound() {
    return (
        <Layout>
        <h1>404</h1>
        <p>Página não encontrada</p>
        <Link to='/'>Voltar para Home</Link>
        </Layout>
    )
}
export default NotFound