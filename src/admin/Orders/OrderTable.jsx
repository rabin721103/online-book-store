import { useQuery } from "@tanstack/react-query";
import { Table } from "react-bootstrap";
import OrderStatus from "./OrderStatus";
import { getAllOrders } from "../../services/starWarsCharater";

function OrderTable() {
  const { data } = useQuery({
    queryKey: ["getOrders"],
    queryFn: () => getAllOrders(),
  });
  const orders = data?.data?.response;

  return (
    <Table responsive style={{ marginTop: "70px", width: "100%" }}>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Book Id</th>
          <th>User Id</th>
          <th>Book Name</th>
          <th>Ordered At</th>
          <th>Status</th>
          {/* <th>shippingAddress</th>
          <th>shippedTime</th> */}
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order, idx) => (
          // different compo
          <OrderStatus key={idx} order={order} />
        ))}
      </tbody>
    </Table>
  );
}

export default OrderTable;
