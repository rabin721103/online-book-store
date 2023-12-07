import { Button, Card, Col, ListGroup, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import { emitErrorToast, emitSuccessToast } from "../../toastify/ToastEmitter";

function CheckoutPage() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.price = cart
    ?.reduce((acc, item) => acc + item?.book?.price * item.quantity, 0)
    .toFixed(2);
  cart.shippingPrice = 100;
  cart.totalPrice = (Number(cart.price) + Number(cart.shippingPrice)).toFixed(
    2
  );

  const placeOrder = async () => {
    const response = await axiosInstance.post("/order");

    if (response?.data?.success) {
      localStorage.removeItem("cart");
      emitSuccessToast(response.message);
      console.log("successful p[ersosdn");
      navigate("/");
    } else {
      emitErrorToast(response.message);
    }
  };
  return (
    <div className="container">
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Payment</h2>

              <p>
                <strong>Method: </strong>
                ConnectIPS
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Your Orders</h2>
              {cart?.length === 0 ? (
                <h3>Your cart is empty!!!</h3>
              ) : (
                <Table hover>
                  <thead>
                    <tr>
                      <th>Book</th>
                      <th>Author</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item?.book?.title}</td>
                        <td>{item?.book?.author}</td>
                        <td>{item?.quantity}</td>
                        <td>{item?.book?.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4} style={{ marginTop: "50px" }}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items: </Col>
                  <Col>Rs.{cart?.price}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Delivery Charge:</Col>
                  <Col>Rs. {cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total Price:</Col>
                  <Col>Rs. {cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrder}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CheckoutPage;
