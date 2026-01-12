import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <h2>Club96</h2>
    <li>
      <NavLink to="/category/jueguetes">JUEGUETES</NavLink>
    </li>
    <li>
      <NavLink to="/category/muebles" >MUEBLES</NavLink>
    </li>
    <li>
      <NavLink to="/category/decoracion" >DECORACION</NavLink>
    </li>
    </nav>
  );
}