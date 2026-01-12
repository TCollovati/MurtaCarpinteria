import { NavLink } from "react-router"
import logo from "../img/Logo.jpg"
import CartW from "./CartW.jsx"

export default function NavBar(){


  return (
    <nav>
      <NavLink to="/">
        <img width="350px"src={logo} alt="Logo de Murta" />
      </NavLink>
      <li>
        <NavLink to="/category/Jueguetes">Jueguetes</NavLink>
      </li>
      <li>
        <NavLink to="/category/Adornos">Adornos</NavLink>
      </li>
      <li>
        <NavLink to="/category/Muebles">Muebles</NavLink>
      </li>
      <CartW/>
    </nav>
  )
}