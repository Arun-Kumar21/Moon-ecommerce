"use client"
import React, {useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {useCart} from "@/hooks/use-cart";
import {useSearchParams} from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";

const CheckOutCart = () => {
  const searchParams = useSearchParams();

  const items = useCart((state) => state.items);
  const removeAll = useCart((state)=> state.removeAll);

  const totalPrice = items.reduce((total , item) => {
    return total + Number(item.price);
  } , 0)

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams , removeAll]);

  const checkOut = async () => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds : items.map((item)=>item.id)
    });

    window.location = res.data.url;
  }

  return (
    <div className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-semibold text-gray-900">
            Order Total
          </div>
          <p className="font-bold text-xl">${totalPrice}.00</p>
        </div>
      </div>
      <Button className="w-full mt-6">
        Checkout <span className="text-red-500 ml-2">(Unavailable)</span>
      </Button>
    </div>
  );
};

export default CheckOutCart;