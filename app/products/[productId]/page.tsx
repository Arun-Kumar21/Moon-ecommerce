import getProduct from "@/action/get-productById";
import getProducts from "@/action/get-products";
import ProductGallery from "@/components/product-gallery";
import ProductDetails from "@/components/product-details";
import React from "react";
import {ChevronRight} from "lucide-react";
import Link from "next/link";

const ProductPage = async ({params}: { params: { productId: string } }) => {
  const product = await getProduct(`${params.productId}`);
  const similarProducts = await getProducts({categoryId: product[0]?.category?.id});

  return (
    <div className={"bg-white"}>
      <div className={"max-w-7xl mx-auto"}>
        <div className={"mt-6 font-bold text-sm flex gap-x-1 items-center"}>
          <Link href={"/"}>Product</Link>
          <ChevronRight className={"w-4 h-4"}/>
          <Link href={`/${product[0].category.name}`}>{product[0].category.name}</Link>
          <ChevronRight className={"w-4 h-4"}/>
          <p>{product[0].name}</p>
        </div>
        <div className={"lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 h-full p-2"}>
          <div>
            <ProductGallery images={product[0].images}/>
          </div>
          <div className={"px-4 sm:mt-16 sm:px-0 lg:mt-0 h-full"}>
            <ProductDetails data={product[0]}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;