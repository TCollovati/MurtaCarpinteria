
import Item from "./Item.jsx"
import getData from "../data/mockService.js"
import {useEffect, useState} from "react"

export default function ItemListContainer({ Title}) {

const [products, setProducts] = useState([])

    useEffect( () => {
        getData().then((respuesta) => {
        console.log("Promesa terminada")
        setProducts(respuesta)
    }).catch( (error) => {
        alert(error)
    })
    }, [] ) 


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