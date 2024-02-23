import React from "react";
import getCategory from "@/action/get-category";
import Billboard from "@/components/billboard";
import ProductFilter from "@/components/product-filter";
import getSizes from "@/action/get-sizes";
import getColors from "@/action/get-colors";
import getProducts from "@/action/get-products";
import ProductCard from "@/components/ui/product-card";
import NoProductFound from "@/components/ui/no-product-found";

interface CategoryPageProps {
  params: { categoryId: string },
  searchParams: {
    colorId: string
    sizeId: string
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({params, searchParams}) => {
  const category = await getCategory(params.categoryId);
  const billboard = category[0].billboard;

  const sizes = await getSizes();
  const colors = await getColors();

  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  })

  return (
    <div className={"max-w-7xl mx-auto bg-white"}>
      <div className={"space-y-10 pb-10"}>
        <Billboard data={billboard}/>
      </div>

      <div className={"px-4 sm:px-6 lg:px-8 pb-24"}>
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
          <div className="hidden lg:block lg:col-span-1">
            <ProductFilter name={"Sizes"} data={sizes} valueKey={"sizesId"}/>
            <ProductFilter name={"Colors"} data={colors} valueKey={"colorsId"}/>
          </div>

          <div className="mt-6 lg:col-span-3 lg:mt-0">
            <h1 className="text-xl font-bold my-2">Products :</h1>
            {products.length === 0 ? (
              <NoProductFound/>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item}/>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;