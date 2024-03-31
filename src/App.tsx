import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Components/Products";
import { useEffect, useState } from "react";
import { Product } from "./Components/Card";
import AppBar from "./Components/AppBar";
import { fetchCategories } from "./api/fetchCategories";
import { fetchProducts } from "./api/fetchProducts";

export type ProductList = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
function App() {
  const [productsResponse, setProductsResponse] = useState<ProductList>();
  const [categories, setCategories] = useState<string[]>();
  const [selectedCategory,setSelectedCategory] = useState<string | undefined>();

  useEffect(() => {
    fetchProducts(selectedCategory).then((ret)=>{
      if(ret){
        setProductsResponse(ret);
      }
    })
  }, [selectedCategory]);

  useEffect(() => {
     fetchCategories().then((ret)=>{
      if(ret){
        setCategories(ret)
      }
     })
  }, []);

  const onChangeCategory = (e:string | undefined)=>{
      setSelectedCategory(e);
  }
  return <main>
    <AppBar categories={categories?categories:[]}  onChangeCategory={onChangeCategory}/>
    <section className="mt-4">
    <Products products={productsResponse?.products}/>

    </section>
  </main>;
}

export default App;
