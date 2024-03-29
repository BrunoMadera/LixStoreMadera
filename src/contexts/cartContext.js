import { useState, createContext } from "react";

export const CartContext = createContext(
    []
)

export function CartContextProvider({ children }) {

       const [cartAdded, setCartAdded] = useState([]);
        
       function addToCart(item, count){
        const itemsAdded = {...item, count: count};

        setCartAdded([...cartAdded, itemsAdded]);
        
        console.log("items no carrinho ↓↓↓ ");
        console.log(cartAdded);
       }

        function clearCart(){
        setCartAdded([]);
       
       }

       function removeItem(itemId) {
        const updatedCart = cartAdded.filter(item => item.id !== itemId);
        setCartAdded(updatedCart);
      }

   
      return (
        <CartContext.Provider value={{ cartAdded, addToCart, clearCart, removeItem }}>
          {children}
        </CartContext.Provider>
      );
    }



// import { createContext, useState } from "react";

// export const CartContext = createContext(
//     []
// )

// export function CartContextProvider({ children }) {

//     const [cart, setCart] = useState([])
//     var index = -1;

//     function addToCart(item, count) {
//         cart.forEach((element, i) => {
//             if(element.id === item.id)
//             index = i
//         });

//         if(index > -1){
//             cart[index] = { id: item.id, name: item.name, price: item.price, amount: item.amount + count, stock: cart[index].stock - count }
//             setCart(cart)
//         } else{
//             setCart([...cart, { id: item.id, name: item.name, price: item.price, amount: count, stock: item.stock - count }])
//         }
//     }

//     function removeItem(id) {
//         cart.forEach((element, i) => {
//             if(element.id === id)
//             index = i
//         });

//         index > -1 ? setCart(cart.splice(index, 1)) : console.log("Não existe item com esse id!")
//     }

//     function clear() {
//         setCart([])
//     }

//     function isInCart(id) {
//         cart.filter(element => {
//             return element.id === id ? true : false
//         });
//     }
    
//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeItem, clear, isInCart }}>
//             {children}
//         </CartContext.Provider>


//     )
// }