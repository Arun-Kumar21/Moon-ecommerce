import {Category} from "@/type";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async(categoryid : string ):Promise<Category[]> => {
  const res =  await fetch(`${URL}/${categoryid}`)

  return res.json();
}

export default getCategory;