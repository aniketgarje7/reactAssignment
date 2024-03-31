import React, { useEffect, useState } from "react";
import { Card, Carousel, Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Product } from "../Components/Card";
import AppBar from "../Components/AppBar";
import { fetchProduct } from "../api/fetchProduct";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    if(!id)return;
    fetchProduct(Number(id)).then((item)=>{
      if(item){
         setProduct(item);
      }
    })
    return () => setProduct(null);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
 
  return (
     <div>
      <AppBar categories={[]}  isCategory={false} />
      <Container>
      <Card className="mt-4 rounded">
        <Carousel className="carousel_product" style={{ height: "50vh" }} data-bs-theme='dark'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={product.thumbnail}
              alt="Product Thumbnail"
              style={{ height: "50vh", objectFit: "contain" }}
              height={500}
            />
          </Carousel.Item>
          {product.images &&
            product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`Product Image ${index + 1}`} style={{ height: "50vh", objectFit: "contain" }} />
              </Carousel.Item>
            ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price:${product.price}</ListGroup.Item>
          <ListGroup.Item>Discount:{product.discountPercentage}%</ListGroup.Item>
          <ListGroup.Item>Availble:{product.stock}</ListGroup.Item>
        </ListGroup>
      </Card>
      </Container>
  </div>
  );
};

export default ProductPage;
