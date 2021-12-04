import { Link } from 'react-router-dom'
import "../Menu/Menu.style.css"

const Menu = () => {
    return (
        <ul className="menu">
      <li>
        <Link className="home" to="/">Home</Link>
      </li>
      <li>
        <Link  className="list" to="/lista">Lista de Tarefas</Link>
      </li>
    </ul>
  )
}
    

export default Menu 