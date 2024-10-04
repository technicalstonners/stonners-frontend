import React, { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { detailsOrder } from "../../actions/orderActions";
import Axios from "axios";
import {
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} from "../../constants/orderConstants";

export default function OrderScreen(props) {
  const router = useRouter();
  const { id } = router.query;
  const orderId = id;
  // const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  // const {
  //   loading: loadingPay,
  //   error: errorPay,
  //   success: successPay,
  // } = orderPay;
  // const { error: errorPay, success: successPay } = orderPay;
  const dispatch = useDispatch();

  useEffect(() => {
    // const addPayPalScript = async () => {
    //   const { data } = await Axios.get("/api/config/paypal");
    //   const script = document.createElement("script");

    //   script.type = "text/javascript";
    //   script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
    //   script.async = true;
    //   script.onload = () => {
    //     setSdkReady(true);
    //   };
    //   document.body.appendChild(script);
    // };
    // if (!order || successPay || (order && order.order._id !== orderId)) {
    //   dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    // } else {
    //   if (!order.isPaid) {
    //     if (!window.paypal) {
    //       addPayPalScript();
    //     } else {
    //       setSdkReady(true);
    //     }
    //   }
    // }
  },
  //  [dispatch, orderId, order, sdkReady, successPay]
   [dispatch, orderId]
   );

  // const successPaymentHandler = (paymentResult) => {
  //   dispatch(payOrder(order, paymentResult));
  // };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox varient="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Order {order._id}</h1>
      <div className=" row top">
        <div className="">
          <div>
            <div>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />{" "}
                  <strong>Address: </strong> {order.shippingAddress.address},{" "}
                  {order.shippingAddress.city},{" "}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox varient="success">
                    Deliverd at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox varient="danger">Not Delivered</MessageBox>
                )}
              </div>
            </div>
            <div>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox varient="success">
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox varient="danger">Not Paid</MessageBox>
                )}
              </div>
            </div>
            <div>
              <div className="card card-body">
                <h2>Order Items</h2>
                <div>
                  {order.orderItems.map((item) => (
                    <div key={item.product}>
                      <div className="">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link href={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="cart cart-body">
            <div>
              <div>
                <h2>Order Summary</h2>
              </div>
              <div>
                <div className="">
                  <div>Items</div>
                  <div>${order.itemsPrice.toFixed(2)}</div>
                </div>
              </div>
              <div>
                <div className="">
                  <div>Shipping</div>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </div>
              <div>
                <div className="">
                  <div>Tax</div>
                  <div>${order.taxPrice.toFixed(2)}</div>
                </div>
              </div>
              <div>
                <div className="">
                  <div>
                    <strong>Order Total</strong>
                  </div>
                  <div>
                    <strong>${order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </div>
              <div>
                {/* {!sdkReady ? (
                  <LoadingBox></LoadingBox>
                ) : (
                  <>
                    {errorPay && (
                      <MessageBox varient="danger">{errorPay}</MessageBox>
                    )}
                    {loading && <LoadingBox></LoadingBox>}
                    <button
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  </>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const payOrder =
  (order, paymentResult) => async (dispatch, getState) => {
    dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = Axios.put(
        `/api/orders/${order._id}/pay`,
        paymentResult,
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_PAY_FAIL, payload: message });
    }
  };
