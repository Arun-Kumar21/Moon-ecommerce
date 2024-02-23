import Billboard from "@/components/billboard";
import getBillboard from "@/action/get-billboard";
import ProductList from "@/components/product-list";
import getProducts from "@/action/get-products";

export default async function Home() {
  const billboard = await getBillboard("clsxbe4fx0001m502y6lb2mhf");
  const products = await getProducts({isFeatured : true});


  return (
    <div className={"max-w-7xl mx-auto"}>
      <div className={"space-y-10 pb-10"}>
        <Billboard data={billboard[0]}/>
        <div className={"flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"}>
          <ProductList title={"Featured Products"} items={products} />
        </div>
      </div>
    </div>
  );
}
