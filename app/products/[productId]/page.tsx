import getProduct from "@/action/get-productById";
import getProducts from "@/action/get-products";

const ProductPage = async ({params} : {params : {productId : string}}) => {
  const product = await getProduct(`${params.productId}`);
  const similarProducts = await getProducts({categoryId : product?.category?.id});

  return (
    <div>

    </div>
  )
}

export default ProductPage;