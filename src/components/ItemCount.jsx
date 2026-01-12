import { useEffect, useState } from 'react';   

export default function ItemCount(){
    const [count, setCount] = useState(1);

useEffect (()=>{
    console.log("Peticion de datos al servidor" );
}, []);

    function handleResta(){
        setCount(count - 1 );
    }
    function handleSuma(){
        setCount(count + 1 );
    }

    return(
        <div>
        <div>
            <button onClick={handleResta}>-</button>
            <span>{count}</span>
            <button onClick={handleSuma}>+</button>
        </div>
            <button>Agregar al carrito</button>
        </div>
    )
}