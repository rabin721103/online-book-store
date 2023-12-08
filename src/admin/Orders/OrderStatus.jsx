import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import { emitSuccessToast } from "../../toastify/ToastEmitter";

function OrderStatus({ order }) {
  const [status, setStatus] = useState("");
  //api
  const updateHandler = async (orderId, status) => {
    const response = await axiosInstance.put(
      `/admin/orders/${orderId}`,
      status
    );
    emitSuccessToast(response?.data?.message);
    console.log(orderId, status);
  };

  return (
    <tr>
      <th>{order?.orderId}</th>
      <td>{order?.book?.bookId}</td>
      <td>{order?.user?.userId}</td>
      <td>{order?.book?.title}</td>
      <td>{order?.date}</td>
      <td>
        {
          <select
            value={status || order?.status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        }
      </td>
      {/* <td>{order?.shippingAddress}</td>
      <td>{order?.shippedTime}</td> */}
      <td>{order?.price}</td>
      <td>{order?.quantity}</td>
      <td>{order?.totalPrice}</td>
      <td className="">
        <button
          onClick={() => {
            // setStatus(orderData?.status);
            // handleUpdate(order?.orderId, orderData?.status);
            updateHandler(order?.orderId, status);
          }}
          type="button"
          className="btn btn-success"
        >
          Update
        </button>
      </td>
    </tr>
  );
}

export default OrderStatus;
