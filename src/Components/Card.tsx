import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export type Product ={
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail: string;
    images?: string[];
  }
type ProductProps = {
    product:Product;
}
function ProductCard({product}:ProductProps) {
const { id, title, description, price, thumbnail,brand } = product;

  return (
    <Card style={{ width: '18rem' }} className='rounded'>
      <Card.Img variant="top" src={thumbnail}  height={200} width={100}/>
      <Card.Body>
        <Card.Title className='text-truncate'>{title}</Card.Title>
        <Card.Text className='text-truncate'>
        {description }
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <span>price:</span>
          ${price}</ListGroup.Item>
        <ListGroup.Item>
          <span>brand:</span>
          {brand}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={`/product/${id}`}>View</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;