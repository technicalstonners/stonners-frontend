import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { useRouter } from "next/router";
import Link from "next/link";
import MessageBox from "../components/MessageBox";

const CartScreen = () => {
  const router = useRouter();
  const { id, qty } = router.query;
  const productId = id;
  const quantity = qty ? Number(qty) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    router.push("/shipping");
  };

  return (
    <div className="row top">
      <div className="">
        <h1>Shopping Cart</h1>
        {cartItems?.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link href="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems?.map((item) => (
              <li key={item?.product}>
                <div className="">
                  <div>
                    <img src={item?.image} alt={item?.name} className="small" />
                  </div>
                  <div className="min-30">
                    {item?.product && item?.name && (
                      <Link href={`/product/${item.product}`}>{item.name}</Link>
                    )}{" "}
                  </div>
                  <div>${item?.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item?.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal (
                {cartItems?.reduce((a, c) => Number(a) + Number(c.qty), 0)}{" "}
                items) : $
                {cartItems?.reduce((a, c) => Number(a) + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkOutHandler}
                className="primary block"
                disabled={cartItems?.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
