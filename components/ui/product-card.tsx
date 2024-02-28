'use client'
import React, {MouseEventHandler, useEffect, useState} from "react";

import Link from "next/link";
import Image from "next/image";

import {Expand, Heart, ShoppingCart} from "lucide-react";

import {Product} from "@/type";
import IconButton from "@/components/ui/icon-button";
import {Button} from "@/components/ui/button";
import {productPreviewHook} from "@/hooks/product-preview-hook";
import {useCart} from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                   data
                                                 }) => {
  const useProductPreviewHook = productPreviewHook();
  const cart = useCart();

  const [isMounted , setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, []);

  if (!isMounted) return null;

  const addToCart:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  }

  const onPreview:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    useProductPreviewHook.onOpen(data);
  }

  return (
    <div className="group flex mx-auto sm:w-full flex-col overflow-hidden bg-white m-4 relative w-full">
        <Link className="relative w-full h-[55vw] sm:h-[400px] md:h-[500px] overflow-hidden group-hover:rounded-lg transition md:w-full flex items-center justify-center border aspect-[11/14] bg-slate-50" href={`/products/${data.id}`}>
          <Image
            src={data.images[0].url}
            alt={"Product Image"}
            fill
            quality={100}
            className={"object-contain rounded-xl group-hover:scale-110 transition"}
          />
        </Link>
      <div className="w-full flex items-center justify-between p-2">
        <Link href={`/products/${data.id}`} className="w-3/4 md:w-3/4">
          <h1 className="truncate">{data.name}</h1>
        </Link>
        <p>${data.price}</p>
      </div>
    </div>
  )
}
export default ProductCard;