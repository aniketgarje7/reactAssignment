import ProductCard, { Product } from "./Card";
import Container from "react-bootstrap/Container";

type ProductsProp = {
  products?: Product[];
};
const Products = ({ products=[] }: ProductsProp) => {
    console.log({products})
  return (
    <Container>
       <div className="product_list">
          {" "}
          {products.map((item, key) => (
            <ProductCard product={item} key={key + item.id} />
          ))}
      </div>
    </Container>
  );
};

export default Products;
