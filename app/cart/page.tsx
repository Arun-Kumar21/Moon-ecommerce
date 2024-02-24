'use client'
import React from "react";
import {useCart} from "@/hooks/use-cart";
import CartItem from "@/components/cart-item";
import CheckOutCart from "@/components/CheckOutCart";

const CartPage : React.FC = () => {
  const cart = useCart();

  return (
    <div className={"bg-white"}>
      <div className={"max-w-7xl mx-auto"}>
        <div className={'px-4 py-16 sm:px-6 lg:px-8'}>
          <h1 className="text-2xl font-bold text-black">Your Cart</h1>
          <p className="text-neutral-500">{cart.items.length} items in your cart</p>

          <div className="mt-6 lg:grid lg:grid-cols-12 lg:items-start gap-x-12 min-h-56">
            <div className="lg:col-span-7 h-full">
              {cart.items.length === 0 && (<p className="text-neutral-500 flex items-center justify-center h-full">No item in added cart</p>)}
              <ul>
                {cart.items.map((item)=> (
                  <CartItem key={item.id} data={item}/>
                ))}
              </ul>
            </div>
            <CheckOutCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage;