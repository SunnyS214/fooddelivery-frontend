//autor method
import { createContext, useContext, useEffect } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null)
const StoreContextProvider=(props)=>{

const [cartItems, setcartItems] = useState({})

//add to cart Functionality
const addToCart=(itemId)=>{
if(!cartItems[itemId]){
    setcartItems((prev)=>({...prev,[itemId]:1}))
}
else{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
}

//remove from cart
const removeFromCart=(itemId)=>{
setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

const getTotalCartAmount=()=>{
    let totalAmount=0
    for(const item in cartItems)
        {
            if (cartItems[item] > 0) {
                let itemInfo=food_list.find((product)=>product._id === item)
totalAmount+=itemInfo.price* cartItems[item]
            }


    }
    return totalAmount
}

    const contextValue={
food_list ,
 addToCart,
 removeFromCart,
 setcartItems,
 cartItems,
 getTotalCartAmount
    }

    return (
        <StoreContext.Provider value ={contextValue}>
{props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider









//our method
// import React, { createContext } from 'react'

// export const StoreContextData=createContext()
// const StoreContext = ({children}) => {

//     return (
//     <div>
//       <StoreContextData.Provider value={} >
//         {children}
//       </StoreContextData.Provider>
//     </div>
//   )
// }

// export default StoreContext
