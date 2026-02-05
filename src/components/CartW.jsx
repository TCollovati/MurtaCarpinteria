import { useContext } from "react"
import cartContext from "../context/cartContext";
import { Link } from "react-router";


export default function CartW(){
  const { countItemsInCart } = useContext(cartContext);
  // * VALUE
  
  return (
    <Link to="/cart" className="cart-w">
      <span className="cart-icon">🛒</span>

    </Link>
  )
}