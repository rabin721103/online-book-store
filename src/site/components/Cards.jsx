import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function Cards({ book }) {
  return (
    <div style={{ margin: "40px" }}>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{book.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {book.author}
          </CardSubtitle>
          <CardText>Price: Rs {book.price}</CardText>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button style={{ background: "blue" }}>Buy</Button>
            <Button style={{ background: "DodgerBlue" }}>Add to Cart</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cards;
