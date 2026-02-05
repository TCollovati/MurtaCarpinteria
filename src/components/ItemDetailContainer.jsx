import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useEffect, useState, useContext } from 'react';
import { getItemData } from '../data/firestore';
import cartContext from '../context/cartContext';

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
    <section>
      <h2>{product.title}</h2>
      <hr />
      <img src={product.img} alt={product.title} />
      <p>{product.description}</p>
      <h4>$ {product.price}</h4>
      <ItemCount onAddToCart={onAddToCart} />
      <button onClick={() => removeItemFromCart(product.id)}>
        Eliminar
      </button>
    </section>
  );
}

export default ItemDetailContainer;
