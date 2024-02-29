import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'
import Filters from '../Filters/Filters'

const Navbar = () => {

  const styleNavLink = ({ isActive }) => {
    return {
      color: isActive ? 'red' : 'blueviolet'
    }
  }
  const styleCartLink = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'red' : ''
    }
  }
  const location = useLocation()
  const [storePath, setStorePath] = useState(false)
  useEffect(() => {
    if (location.pathname === '/store') {
      setStorePath(true)
    } else {
      setStorePath(false)
    }
  }, [location.pathname])


  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <nav>
          <NavLink
            to={'/'}
            style={styleNavLink}
          >
            Inicio
          </NavLink>
          <NavLink
            to={'/store'}
            style={styleNavLink}
          >
            Tienda
          </NavLink>
          <NavLink
            to={'/wishlist'}
            style={styleNavLink}
          >
            Lista de deseos
          </NavLink>
        </nav>
        <div className={styles.cartLink}>
          <NavLink
            to={'/shoppingcart'}
            style={styleCartLink}
          >
            🛒
          </NavLink>
        </div>
      </div>
      {storePath && <Filters />}
    </div>
  )
}

export default Navbar
