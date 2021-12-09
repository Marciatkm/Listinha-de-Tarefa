import { Link } from 'react-router-dom'

import "../Menu/menu.styles.css"

const Menu = () => {
    return (
        <ul className="navbar">
      <li>
        <Link title="Home" className="link" to="/">Home</Link>
      </li>
      <li>
        <Link  title="Lista de Tarefa"  className="link"to="/lista">Lista de Tarefas</Link>
      </li>
    </ul>
  )
}
    

export default Menu 