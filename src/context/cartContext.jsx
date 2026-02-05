import { createContext, useState } from 'react';

const cartContext = createContext({ cart: []});
 const DefaultContextProvider= cartContext.Provider;

export function CartProvider({children}){

    const [cart, setCart] = useState([]);

    function addItemToCart(item, count){
        const newCart = structuredClone(cart);
        newCart.push({ ...item, count})
        setCart(newCart);
        //Condicional if para no duplicar el articulo que ya existe, solo que sume
    }

    function removeItemFromCart(idRemove){
        const newCart = cart.filter(item => item.id !== idRemove)
        setCart(newCart);
    }

    function countItemInCart (){
        let total=0;
        cart.forEach((item) => total+= item.count)
        return total;
    }

    function clearCart(){

    }

    function countTotalPrice(){

    }
    

    return (
        <DefaultContextProvider value={{cart: cart, addItemToCart, removeItemFromCart, countItemInCart}}>
        {children}
        </DefaultContextProvider>
    )
}

export default cartContext;