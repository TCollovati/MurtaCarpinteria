import { useParams } from "react-router";
import ItemCount from "./ItemCount";
import products from "../data/products";
import { useEffect,useState } from "react";
import { getItemData } from "../data/mockService";

function ItemDetailContainer() {
  const {itemTITLE}=useParams
  const [products, setProducts] = useState({});  

  useEffect(() => {
    getItemData(itemTITLE).then((respuesta) => setProducts(respuesta));
  }, [itemTITLE]);

  return (
    <section>
      <h2>{products.title}</h2>
      <hr />
      <img src={products.img} alt="Imagen" />
      <p>{products.description}</p>
      <h4>{products.price}</h4>
      <ItemCount/>
    </section>
  );
}

export default ItemDetailContainer;