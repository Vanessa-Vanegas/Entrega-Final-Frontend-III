import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const { Theme, handleThemeChange } = useContext(ContextGlobal)
  

  return (
    <nav className='navbar' style={{background:Theme.backgroundNavbar, color:Theme.color}}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='navbarFont'>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/favorites'}>Favorites</Link>     
        <i className={(Theme.color === 'black') ? 'fa-solid fa-moon' : 'fa sharp fa-light fa-sun'} onClick={handleThemeChange}></i>   
      </div>
      
    </nav>
  )
}

export default Navbar