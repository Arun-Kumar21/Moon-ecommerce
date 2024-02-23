'use client'
import React from "react";
import {useEffect, useState} from "react";

import Link from "next/link";
import Image from "next/image";

import {Expand, Heart, ShoppingCart} from "lucide-react";

import {Product} from "@/type";
import IconButton from "@/components/ui/icon-button";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                   data
                                                 }) => {

  const router = useRouter();

  const [isMounted , setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true)
  }, []);

  if (!isMounted) return  null;

  return (
    <div className="group flex w-[80%] sm:max-w-64 sm:w-64 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md p-2">
      <div className={"relative w-full flex items-center justify-center"}>
        <Link className="relative aspect-square flex h-52 overflow-hidden rounded-xl" href={`/products/${data.id}`}>
          <Image
            src={data.images[0].url}
            alt={"Product Image"}
            fill
            quality={100}
            className={"object-top object-cover aspect-square rounded-xl"}
          />
        </Link>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-3">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600"/>}
            />
            <IconButton
              icon={<Heart size={20} className="text-gray-600"/>}
            />
          </div>
        </div>
      </div>
      <div className={"mt-2 p-2 flex items-center justify-between"}>
        <div>
          <p className="font-bold text-lg">{data.name}</p>
          <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>
        <div className="flex items-center justify-between text-xl font-semibold mt-1">
          ${data.price}.00
        </div>
      </div>
      <Button variant={"default"} className={"flex items-center gap-x-4 w-full mt-2"}>
        <ShoppingCart className={"w-5 h-5"}/>
        <p>Add to cart</p>
      </Button>
    </div>
  )
}
export default ProductCard;