import { useParams } from "react-router";
import ItemCount from "./ItemCount";

function ItemDetailContainer() {
    const parametrosURL = useParams();
    console.log("Parámetros de la URL:", parametrosURL);

  return (
    <section>
      <h2>Detalle del Item</h2>
      <hr />
      <img src="/" alt="Imagen" />
      <p>Descripcion</p>
      <h4>Precio: $450.000</h4>
      <ItemCount/>
    </section>
  );
}

export default ItemDetailContainer;