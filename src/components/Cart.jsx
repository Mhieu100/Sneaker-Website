import React from 'react'
import CartCount from './Cart/CartCount'
import CartItem from './Cart/CartItem'
import CartEmpty from './Cart/CartEmpty'

const Cart = () => {
  return (
    <>
      <div className={`fixed top-0 right-0 left-0 bottom-0  blur-effect-theme w-full h-screen opacity-100 z-[300]`}>
        <div className={`blur-effect-theme h-screen w-full max-w-xl absolute right-0`}>
            <CartCount/>
            <CartEmpty/>
            <CartItem/>
        </div>
      </div>
    </>
  )
}

export default Cart
