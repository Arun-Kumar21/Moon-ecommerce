import React from "react";
import {Product} from "@/type";
import getSizes from "@/action/get-sizes";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Heart, ShoppingBag} from "lucide-react";

interface ProductDetailsProps {
  data : Product ;
}

const ProductDetails:React.FC<ProductDetailsProps> = async ({data}) => {
  const sizes = await getSizes();

  return (
    <div className={"w-full mt-12"}>
      <div className={"flex items-center justify-between "}>
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
          {sizes.map((size) => (
            <div key={size.id} className={cn("p-4 border w-12 h-10 flex items-center justify-center rounded-md cursor-pointer" , size.value === data.size.value ? "bg-black text-white hover:bg-neutral-600" : "bg-neutral-200 cursor-not-allowed")}>
              <p className={"font-bold"}>{size.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={"flex items-center gap-x-4 mt-8 lg:w-1/2"}>
        <Button className={"w-[80%] flex items-center gap-x-4"}>
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