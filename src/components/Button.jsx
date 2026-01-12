import { useState } from "react"

export default function Button(props){
    var [colorFondo, setColorFondo] = useState("#4353baff");

    function handleChangeColor(){
        console.log("Cambiando color")
        setColorFondo("rgb(129, 19, 197)");
    }
        return(
        <button onClick={handleChangeColor} 
        style={{backgroundColor: colorFondo}}>{props.label}
        </button>
    
)
} 

