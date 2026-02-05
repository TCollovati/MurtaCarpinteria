import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useEffect, useState, useContext } from 'react';
import { getItemData } from '../data/firestore';
import cartContext from '../context/cartContext';
import './ItemDetailContainer.css'
import NavBar from './NavBar';

function ItemDetailContainer() {
  const { itemID } = useParams();
  const [product, setProduct] = useState(null);
  const { addItemToCart, removeItemFromCart } = useContext(cartContext);

  useEffect(() => {
    getItemData(itemID).then(response => {
      setProduct(response);
    });
  }, [itemID]);

  if (!product) {
    return <h2>Cargando producto...</h2>;
  }

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito`);
    addItemToCart(product, count);
  }

  return (
    <section className="item-detail">
  <div className="item-detail-card">
    <img 
      className="item-detail-img"
      src={product.img} 
      alt={product.title} 
    />

    <div className="item-detail-info">
      <h2 className="item-detail-title">{product.title}</h2>
      <p className="item-detail-description">{product.description}</p>

      <h4 className="item-detail-price">$ {product.price}</h4>

      <ItemCount onAddToCart={onAddToCart} />

      <button
        className="remove-btn"
        onClick={() => removeItemFromCart(product.id)}
      >
        Eliminar
      </button>
    </div>
  </div>
</section>

  );
}

export default ItemDetailContainer;
