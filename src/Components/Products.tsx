import ProductCard, { Product } from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
