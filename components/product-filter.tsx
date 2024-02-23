"use client"

import React from "react";
import {Color, Size} from "@/type";
import {useRouter, useSearchParams} from "next/navigation";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

import qs from "query-string";

interface ProductFilterProps {
  name : string
  data :  (Color | Size) [];
  valueKey : string
}

const ProductFilter:React.FC<ProductFilterProps> = ({
  name,
  data,
  valueKey
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id : string) => {
    const current = qs.parse(searchParams.toString())

    const query = {
      ...current ,
      [valueKey] : id
    }

    if (current[valueKey] === id) {
      query[valueKey] = null
    }

    const url = qs.stringifyUrl({
      url : window.location.href,
      query
    })

    router.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {name}
      </h3>
      <hr className="my-4"/>
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              variant={"outline"}
              className={cn(
                'rounded-md text-sm p-2 border border-gray-300 hover:bg-black hover:text-white',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductFilter;