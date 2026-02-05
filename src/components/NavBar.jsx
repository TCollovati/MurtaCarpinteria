import { NavLink } from "react-router"
import logo from "../img/Logo.jpg"
import CartW from "./CartW.jsx"
import "./Navbar.css"

export default function NavBar(){


  return (
    <nav className="navbar">
  <div className="navbar-left">
    <NavLink to="/">
      <img src={logo} alt="Logo de Murta" />
    </NavLink>
  </div>

  <div className="navbar-center">
    <ul className="navbar-links">
      <li><NavLink to="/category/Juguetes">Juguetes</NavLink></li>
      <li><NavLink to="/category/Adornos">Adornos</NavLink></li>
      <li><NavLink to="/category/Muebles">Muebles</NavLink></li>
    </ul>
  </div>

  <div className="navbar-right">
    <CartW />
  </div>
</nav>

  )
}