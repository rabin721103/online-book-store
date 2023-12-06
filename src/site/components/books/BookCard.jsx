import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { addToCart, getAllFromCart } from "../../../services/starWarsCharater";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  const handleClick1 = async () => {
    const res1 = await addToCart(book?.bookId);
    window.alert(res1?.message);
  };
  return (
    <div style={{ margin: "40px" }}>
      <Card
        style={{
          width: "26rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/250/200" />
        <CardBody>
          <CardTitle tag="h5">
            <Link to={`bookdetails/${book?.bookId}`}>{book?.title}</Link>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {book?.author}
          </CardSubtitle>
          <CardText>Price: Rs {book?.price}</CardText>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button style={{ background: "##83e6b7" }}>
              <Link to={`bookdetails/${book?.bookId}`}>Book Details</Link>
            </Button>
            <Button style={{ background: "DodgerBlue" }} onClick={handleClick1}>
              Add to Cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default BookCard;
