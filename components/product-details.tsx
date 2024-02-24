'use client'
import React from "react";
import {Product} from "@/type";
import getSizes from "@/action/get-sizes";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Heart, ShoppingBag} from "lucide-react";

interface ProductDetailsProps {
  data : Product ;
}

const ProductDetails:React.FC<ProductDetailsProps> = ({data}) => {
  const size = data.size;

  return (
    <div className={"w-full"}>
      <div className={"flex items-center justify-between"}>
        <h1 className={"text-neutral-500 font-semibold text-sm uppercase"}>Brand</h1>
        <p className={"text-xs text-neutral-400"}>{data.id}</p>
      </div>
      <h1 className={"text-2xl font-bold"}>{data.name}</h1>
      <p className={"text-sm"}>4.5 rating</p>
      <div className={"my-4"}>
        <p className={"font-bold text-4xl"}>${data.price}.00</p>
      </div>

      <div className={"mt-12 flex gap-y-6 flex-col"}>
        <div className="flex items-center gap-x-4">
          <h3 className="font-bold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full cursor-pointer border border-gray-600" style={{backgroundColor: data?.color?.value}}/>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-bold text-black">Size:</h3>
          {size.name}
          <Button variant={"secondary"}>{size.value}</Button>
        </div>
      </div>

      <div className={"flex items-center gap-x-4 mt-8"}>
        <Button className={"flex items-center gap-x-4"}>
          <ShoppingBag />
          <p>Add to cart</p>
        </Button>

        <Button variant={"outline"} className={"bg-neutral-200"}>
          <Heart className={"w-4 h-4"}/>
        </Button>
      </div>
    </div>
  )
}

export default ProductDetails;