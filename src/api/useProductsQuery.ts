import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function getProducts() {
    return axios.get<never,ProductsResponse>("https://api.escuelajs.co/api/v1/products/");
}

const useProductsQuery=()=>{
  return useQuery({
    queryKey:["products"],
    queryFn:getProducts
  })
}

export default useProductsQuery;