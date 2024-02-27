'use client'
import React, {MouseEventHandler} from "react";
import {Product} from "@/type";
import getSizes from "@/action/get-sizes";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Heart, ShoppingBag} from "lucide-react";
import {useCart} from "@/hooks/use-cart";
import {images} from "next/dist/build/webpack/config/blocks/images";

interface ProductDetailsProps {
  data : Product ;
}

const ProductDetails:React.FC<ProductDetailsProps> = ({data}) => {
  const size = data.size;

  const cart = useCart();

  const addToCart:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  }

  return (
    <div className="w-full mt-8 flex flex-col">
      <h1 className={"text-2xl"}>{data.name}</h1>
      <h3 className="font-bold mt-2">{data.category.name}</h3>

      <div className="py-6">
        <div className="price flex items-center gap-x-6">
          <h1 className="font-semibold text-xl">MRP:</h1>
          <h1 className="font-semibold text-xl">${data.price}.00</h1>
        </div>

        <div className="my-2">
          <p className="text-zinc-500 font-semibold">incl. of taxes</p>
          <p className="text-zinc-500 font-semibold">(Also includes all applicable duties)</p>
        </div>

        <div className="my-12">
          <p className="text-lg font-semibold text-neutral-600">Available Sizes:</p>
          <Button variant="outline" className="my-2">
            {data.size.name} ({data.size.value})
          </Button>
        </div>

        <div className="w-full flex flex-col gap-y-4">
          <button className="w-full md:w-1/3 bg-black hover:bg-neutral-800 text-white p-4 rounded-[30px] font-bold"
                  onClick={addToCart}
          >
            Add to Cart
          </button>

          <button className="w-full md:w-1/3 hover:border-black text-black border p-4 rounded-[30px] font-bold flex items-center justify-center"
          >
            <p>Favourite</p>
            <Heart className="w-6 h-6 ml-2"/>
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails;