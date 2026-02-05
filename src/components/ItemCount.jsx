import { useState } from "react"


export default function ItemCount(props){
  const [count, setCount] = useState(1);
 
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
    <button onClick={()=>props.onAddToCart(count)} >Agregar al carrito</button>
    </div>
  )
}