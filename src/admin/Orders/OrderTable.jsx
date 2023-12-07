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
  // console.log(orders);
  return (
    <Table responsive style={{ marginTop: "70px", width: "100%" }}>
      <thead>
        <tr>
          <th>orderId</th>
          <th>bookId</th>
          <th>userId</th>
          <th>BookName</th>
          <th>Ordered At</th>
          <th>status</th>
          {/* <th>shippingAddress</th>
          <th>shippedTime</th> */}
          <th>price</th>
          <th>quantity</th>
          <th>totalPrice</th>
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
