import React from "react";
import {Button} from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Plus} from "lucide-react";
import ProductFilter from "@/components/product-filter";
import getSizes from "@/action/get-sizes";
import getColors from "@/action/get-colors";

const MobileFilter:React.FC = async () => {
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <div className={"rounded-3xl flex items-center bg-black hover:bg-neutral-700 text-white py-2 px-4"}>Filters <Plus className={"ml-2 w-4 h-4"}/></div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Products Filters</SheetTitle>
            <SheetDescription>
              <ProductFilter name={"Sizes"} data={sizes} valueKey={"sizesId"}/>
              <ProductFilter name={"Colors"} data={colors} valueKey={"colorsId"}/>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileFilter;