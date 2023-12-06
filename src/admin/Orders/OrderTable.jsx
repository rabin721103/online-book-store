import { useQuery } from "@tanstack/react-query";
import { Table } from "react-bootstrap";
import OrderStatus from "./OrderStatus";

function OrderTable() {
  const { data } = useQuery({
    queryKey: ["getOrders"],
    queryFn: () => getAllOrders(),
  });
  const orders = data?.data?.response;
  console.log(orders);
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>orderId</th>
          <th>bookId</th>
          <th>userId</th>
          <th>BookName</th>
          <th>Ordered At</th>
          <th>status</th>
          <th>shippingAddress</th>
          <th>shippedTime</th>
          <th>price</th>
          <th>quantity</th>
          <th>totalPrice</th>
        </tr>
      </thead>
      <tbody>
        <tbody>
          {orders?.map((order, idx) => (
            // different compo
            <OrderStatus key={idx} order={order} />
          ))}
        </tbody>
      </tbody>
    </Table>
  );
}

export default OrderTable;
