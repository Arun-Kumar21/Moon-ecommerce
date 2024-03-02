import Billboard from "@/components/billboard";
import getBillboard from "@/action/get-billboard";
import ProductList from "@/components/product-list";
import getProducts from "@/action/get-products";

export default async function Home() {
  const billboard = await getBillboard("clt4ieino0001k5t4pbs59ym9");
  const products = await getProducts({});

  const featuredProducts = await getProducts({isFeatured : true});
  const latestProducts = products.slice(0,5);

  return (
    <div className={"space-y-10 pb-10"}>
      <Billboard data={billboard[0]}/>
      <div className={"flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"}>
        <ProductList title={"Featured Products"} items={featuredProducts}/>
      </div>

      <div className={"flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"}>
        <ProductList title={"Latest Arrivals"} items={latestProducts}/>
      </div>
    </div>
  );
}
