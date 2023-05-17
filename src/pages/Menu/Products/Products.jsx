import { Col, Container, Row } from 'react-bootstrap';
import { Product } from './Product/Product.jsx';

import "./products.css";

export function Products() {
  const products = [ { name: "Producto 1", description: "Descriptción producto 1", img: "https://i.ibb.co/XkJndTJ/uganda.jpg", price: 4000 }, { name: "Producto 2", description: "Descriptción producto 2", img: "https://i.ibb.co/XkJndTJ/uganda.jpg", price: 4000 }, { name: "Producto 3", description: "Descriptción producto 3", img: "https://i.ibb.co/XkJndTJ/uganda.jpg", price: 4000 }, { name: "Producto 4", description: "Descriptción producto 4", img: "https://i.ibb.co/XkJndTJ/uganda.jpg", price: 4000 }, { name: "Producto 5", description: "Descriptción producto 5", img: "https://i.ibb.co/XkJndTJ/uganda.jpg", price: 4000 } ]
  return (
    <Container >
      <Row className='products'>
        { products.map( product => {
          return (
            <Col>
              <Product name={ product.name } description={ product.description } img={ product.img } price={ product.price }
              ></Product>
            </Col>
          )
        } ) }
      </Row>

    </Container>
  )
}