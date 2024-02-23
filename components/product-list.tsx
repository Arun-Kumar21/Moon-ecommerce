import React from "react";
import {Product} from "@/type";
import ProductCard from "@/components/ui/product-card";

interface  ProductListProps {
  title : string
  items : Product[]
}

const ProductList:React.FC<ProductListProps> = ({title , items}) => {
  return (
    <div>
      <h1 className={"text-xl md:text-3xl font-semibold"}>{title}</h1>
      <div className={"flex items-center flex-col  sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 py-2 gap-x-4"}>
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