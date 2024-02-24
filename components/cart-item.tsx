import React from 'react';
import Image from 'next/image'
import {Product} from "@/type";
import Link from "next/link";
import {Trash2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useCart} from "@/hooks/use-cart";


interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({data}) => {
  const cart = useCart();

  return (
    <li className="flex py-6 border-t items-center justify-between">
      <div className="flex gap-x-6 items-center">
        <Image
          src={data.images[0].url}
          alt="image"
          width="150"
          height="150"
          className="object-cover object-top w-32 h-32 rounded-xl border"
        />

        <div className="flex flex-col gap-y-2">
          <Link href={`/products/${data.id}`}>
            <h1 className="font-bold text-black text-xl">{data.name}</h1>
          </Link>
          <p className="text-sm">{data.color.name}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <h1 className="text-xl font-bold">${data.price}.00</h1>

        <Button variant="ghost" onClick={()=>cart.removeItem(data.id)}>
          <Trash2 className="w-5 h-5"/>
        </Button>
      </div>
    </li>
  );
};

export default CartItem;