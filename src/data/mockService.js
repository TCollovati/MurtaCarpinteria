import products from "./products"

const miPromise = new Promise( (resolve, reject) => {
    console.log("Iniciando promesa...")
    setTimeout( () => {resolve("La promesa se cumplio exitosamente")},1000)

})

function getData(){
    const promiseData= new Promise((resolve, reject) =>{
        console.log("Obteniendo datos...")
        setTimeout( () => {resolve(products)},1000)
    })
    return promiseData
}

    export  function getItemData(itemTITLE){
      const promiseData= new Promise((resolve, reject) =>{
        const itemRequested = products.find( (item) => item.title === itemTITLE)
        setTimeout(() =>resolve(itemRequested),1000)
    })
    return promiseData
    }

export default getData;