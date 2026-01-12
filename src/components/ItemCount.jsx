import { useState, useEffect } from "react"

export default function ItemCount(){
  const [count, setCount] = useState(1);
  
  useEffect( () =>{
    console.log("Petición de datos a la base de datos")
    return () => { console.log("Tarea de desmontaje")}    
  }, []);

 function handleResta() {
  setCount(prevCount => {
    if (prevCount > 1) {
      return prevCount - 1
    }
    return prevCount
  })
}

  function handleSuma(){      
      setCount(count + 1);
  }

  return (
    <div>
    <div>
        <button onClick={ handleResta }>-</button>
        <span>{count}</span>
        <button onClick={ handleSuma }>+</button>
    </div>
    <button>Agregar al carrito</button>
    </div>
  )
}