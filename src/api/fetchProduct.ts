import { Product } from "../Components/Card";

export const fetchProduct = async (id:number) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const data: Product = await response.json();
       return data;
    } catch (error) {
      console.error("Error fetching product:", error);
      return false;
    }
  };