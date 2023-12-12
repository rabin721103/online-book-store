import { Col, Image, ListGroup, Row } from "react-bootstrap";
import axiosInstance from "../../../../axiosInstance";
import { useEffect, useState } from "react";

function OrderPage() {
  //   const { data } = useQuery({
  //     queryKey: ["getOrders"],
  //     queryFn: () => getOrdersById(),
  //   });
  const [orders, setOrder] = useState([]);
  const fetchBooks = async () => {
    const data = await axiosInstance.get("order/user-orders");
    const order = data?.data?.response;
    setOrder(order);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="container">
      <Row>
        <Col>
          <h1>Your Orders</h1>
          {orders && orders.length === 0 ? (
            <h3>You have not placed any order!!!</h3>
          ) : (
            <ListGroup variant="flush">
              {orders.map((order, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src="https://picsum.photos/250/200"
                        alt={order?.book?.title}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={2}>Title:{order?.book?.title}</Col>
                    <Col md={2}>Quantity:{order?.quantity}</Col>
                    <Col md={2}>Rate: Rs.{order?.book?.price}</Col>
                    <Col md={2}>
                      TotalPrice: Rs.{order?.quantity * order?.book?.price}
                    </Col>
                    <Col md={2}>
                      Delivery Date: 3 Days After
                      {order?.shippedTime}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default OrderPage;
