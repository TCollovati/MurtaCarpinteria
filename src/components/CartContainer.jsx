import { useContext,useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/firestore";

export default function CartContainer(){
    const { cart } = useContext(cartContext);
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        email: "",
    });

    console.log(formData);

    function handleCheckOut(){
        const buyOrder ={
            buyer: formData,
            items: cart,
            total: 999,//Calcular el total
            date: new Date()
        }
        createBuyOrder(buyOrder)
    }

    function handleSubmit(event) {
        console.log(event);
        event.preventDefault();
    }

    function handleChange(event) {
        console.log(event);
        const {value, name} = event.target;
        const newFormData = {...formData};
        newFormData[name] = value;
        setFormData(newFormData);
    }

    function handleReset() {
        setFormData({
            username: "",
            phone: "",
            email: "",
        });
    }


    return(
        <div>
            <h2>Tu carrito de compras</h2>
            <div>
                <ul>
                { 
                cart.map( (item) => <li>
                    {item.title} - ${item.price} - Cantidad: {item.count} <button>Quitar del carrito</button>
                </li>)
                }
                </ul>
            </div>
        <div className="formulario-compra">
            <form onSubmit={handleSubmit}>
                <label for="username">
                    Nombre de usuario:
                    <input 
                    onChange={handleChange}
                    name="username" 
                    type="text" 
                    placeholder="Nombre Completo"/>             
                </label>
                <br />
                <label for="email">
                    Email:
                    <input
                    onChange={handleChange} 
                    name="email" 
                    type="text" 
                    placeholder="tumail@gmail.com"/>             
                </label>
                <br />
                <label for="phone">
                    Telefono:
                    <input
                    onChange={handleChange} 
                    name="phone" 
                    type="text" 
                    placeholder="+56912341234"/>             
                </label>
                <br />
                <button onClick={handleCheckOut} >Confirmar Compra</button>

                <button onClick={handleReset} type="reset">Limpiar</button>
            </form>
        </div>
        
        </div>
    )}