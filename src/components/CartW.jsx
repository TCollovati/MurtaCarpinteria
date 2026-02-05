import { useContext } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";
import "./CartW.css"

export default function CartW() {
  const { countItemInCart } = useContext(cartContext);

  const totalItems = countItemInCart();

  return (
    <Link to="/cart" className="cart-w">
      <span className="cart-icon">🛒</span>

      {totalItems > 0 && (
        <span className="cart-count">{totalItems}</span>
      )}
    </Link>
  );
}
