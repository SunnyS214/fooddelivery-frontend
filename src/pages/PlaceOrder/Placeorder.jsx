import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'
const Placeorder = () => {


  const {food_list ,
   addToCart,
   removeFromCart,
   setcartItems,
   cartItems,
   getTotalCartAmount}=useContext(StoreContext)
  
  //  const { food_list, removeFromCart, cartItems, getTotalCartAmount } = useContext(StoreContext)
  
    // ✅ Check if cart has any items
    const hasItemsInCart = Object.values(cartItems).some(quantity => quantity > 0);
    
    // ✅ Use deliveryFee = 0 if cart is empty
    const deliveryFee = hasItemsInCart ? 2 : 0;
    const totalAmount = getTotalCartAmount() + deliveryFee;
  
   return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Informatino</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Adress' />
        <input type="text" placeholder='Street' />
        
 <div className="multi-fields">
          <input type="text" placeholder='City Name' />
          <input type="text" placeholder='State Name' />
        </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
      <input type="text" placeholder='Phone' />

      </div>

      <div className="place-order-right">
<div className="cart-total">
          <h2>Cart Totals</h2>

          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${totalAmount}</b>
            </div>
          </div>
          <button  >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
