import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItem,food_list,removeFromcart, getTotalcartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cartitem">
        <div className="cartitem-title">
          <p>Item </p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index)=>{
          if(cartItem[item._id]>0){
            return(
              <>
              <div className='cartitem-title cartitem-item' key={index}> 
                <img src={url+"/images/"+  item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>₹{item.price * cartItem[item._id]}</p>
                <p onClick={()=> removeFromcart(item._id)}className='cross'>x</p>
                </div>
                <div>
                  <hr />
                
              </div>
             </>
            )
          }
        })}
      
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal:</p>
              <p> {getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee:</p>    
              <p>₹{getTotalcartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>₹{getTotalcartAmount()===0?0:getTotalcartAmount()+ 2}</b>  
            </div>
          </div>
          <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>  
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a Promo-Code entre here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promocode'  />
              <button>Apply</button>  
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
