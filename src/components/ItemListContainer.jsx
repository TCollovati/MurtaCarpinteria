
import Item from "./Item.jsx"
import getData from "../data/mockService.js"
import {useEffect, useState} from "react"
import products from "../data/products.js"

export default function ItemListContainer({ Title}) {

const [products, setProducts] = useState([])

    async function fetchProducts() {
    }
    useEffect(() => {
        getData().then(respuesta=> setProducts(respuesta))
    },[])

    return (
        <section>
            <h3>{Title}</h3>
            
            {products.map( 
                    (item) => <Item
                    key={item.id}
                    title={item.title} 
                    img={item.img}
                    price={item.price}/>
                )
            }
        </section>
    )
}