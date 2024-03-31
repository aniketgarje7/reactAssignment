import { ProductList } from "../App";

export const fetchProducts = async (categorie: string | undefined) => {
  const url = categorie ? `https://dummyjson.com/products/category/${categorie}` : "https://dummyjson.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data: ProductList = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return false;
  }
};
