import { Card } from 'react-bootstrap';

export function Product( { name, description, price, img } ) {
  return (
    <Card style={ { width: "18rem" } }>
      <Card.Img variant='top' src={ img }></Card.Img>
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>
          <p>{ description }</p>
          <p>{ price }</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}