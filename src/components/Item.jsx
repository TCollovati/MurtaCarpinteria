import { Link } from "react-router";

export default function Item({id, title, price, img, descripcion,}) {
    return (
        <section>
            <div style={{ margin: "100px", border: "solid 1px white", borderRadius: "8px", padding: "16px", }}>
                <p>{id}</p>
                <h3>{title}</h3>
                <img width="220" src={img}alt="" />
                <p>${price}</p>
                <p>{descripcion}</p>


                <Link to= {`/products/${title}`}>
                <button>Ver producto</button>
                </Link>
            </div>
        </section>

    )
}


