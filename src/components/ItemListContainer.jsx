
import Item from "./Item"
import { getData, getCategoryData } from "../data/firestore"
import './itemlist.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import './ItemListContainer.css'



export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const { categoryID } = useParams();



  useEffect(() => {
    if (categoryID) {
      getCategoryData(categoryID).then(respuesta => setProducts(respuesta))
    }
    else {
      getData().then(respuesta => setProducts(respuesta))
    }
  }, [categoryID])

  return (
    <section>
      <h2 className="welcome-title">
        Bienvenidos a mi mundo <br />
        Bienvenidos a Murta {props.greeting}
      </h2>

      <div className="itemlist">
        {
          products.map(
            (item) => <Item
              key={item.id}
              {...item} 
            />
          )
        }
      </div>
    </section>
  )
}