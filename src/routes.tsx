import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import Contato from './pages/Contato'
import ListaTarefas from './pages/Tarefas'
import NotFound from './pages/404'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/sobre', element: <Sobre />},
  {path: '/Contato', element: <Contato />},
  {path: '/Tarefas', element: <ListaTarefas />}
])

export default router