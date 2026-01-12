
import Item from "./Item"
import getData, { getCategoryData } from "../data/mockService"
import './itemlist.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ItemListContainer(props){
  const [products, setProducts] = useState([]); 
  
  const { categoryID } = useParams();
  console.log(categoryID)


  useEffect( () =>{
    if (categoryID) {
      getCategoryData(categoryID).then( respuesta => setProducts(respuesta))
    }
    else
    {
      getData().then( respuesta => setProducts(respuesta))
    }
  }, [categoryID])
  
  return (
    <section>
        <h2>Hola, bienvenidos a mi tienda {props.greeting} </h2>
        <div className="itemlist">
        {
          products.map( 
            (item) => <Item 
              key={item.id}
              {...item} // spread
            />
          )
        }       
        </div>
    </section>      
  )
}