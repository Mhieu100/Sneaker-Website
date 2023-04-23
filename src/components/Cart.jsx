import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCloseCart,
  selectCartState,
  selectCartItems,
} from "../app/CartSlice";
import CartCount from "./Cart/CartCount";
import CartItem from "./Cart/CartItem";
import CartEmpty from "./Cart/CartEmpty";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cardItems = useSelector(selectCartItems);
  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <>
      <div
        className={
          ifCartState
            ? "fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-screen z-[300] opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }
      >
        <div
          className={`blur-effect-theme h-screen w-full max-w-xl absolute right-0`}
        >
          <CartCount onCartToggle={onCartToggle} />
          {cardItems?.length === 0 ? (
            <CartEmpty />
          ) : (
            <div>
              <div>
                {cardItems.map((val, i) => (
                  <CartItem key={i} value={val} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
