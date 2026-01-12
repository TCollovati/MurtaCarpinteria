import { Link } from "react-router"
import ItemCount from "./ItemCount"

export default function Item( {title, img, price, id} ){
  
  console.log("Ciclo de vida: Montaje")

  return (
    <div style={{ border: "solid 1px white", borderRadius: "8px", padding: "16px", margin: "12px auto"}}>
      <h3>{title}</h3>
      <img width="220" src={img} />
      <p>$ {price}</p>      
      
      <Link to={`/product/${id}`}>
        <button>Ver producto</button>
      </Link>
      <ItemCount/>
    </div> 
  )  
}

export function ItemButton(){
  return(
    <>
      <h2>Hola ItemButton</h2>
      <button>Click aquí</button>
    </>
  )
}