import React from "react";
import {Product} from "@/type";
import ProductCard from "@/components/ui/product-card";

interface  ProductListProps {
  title : string
  items : Product[]
}

const ProductList:React.FC<ProductListProps> = ({title , items}) => {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <h1 className={"text-xl"}>{title}</h1>
      <div className={"flex items-center flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 mt-2 py-2 gap-x-4"}>
          {items.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
            />
          ))}
      </div>
    </div>
  )
}

export default ProductList;