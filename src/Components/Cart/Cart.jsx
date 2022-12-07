import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import React from "react";
import style from './Сart.module.scss';
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (


    <>
      {cart.cartItems?.map((cartItem) =>
        <div className={style.itembox} key={cartItem.id}>
          <div className={style.left}>
            <img
              src={cartItem.imageUrl}
              alt={cartItem.title}
              className={style.itemCartImg}
            ></img>

          </div>

          <div className={style.center}>

            <span className="">{cartItem.price}₽</span>
            <span className="">{cartItem.title}</span>
            <span>{cartItem.weight}гр</span>

          </div>
          <div className={style.right}>
            <button
              className={style.deleteButtonCart}
              onClick={() => handleRemoveFromCart(cartItem)}> -
            </button>
            <span className="">{cartItem.cartQuantity}</span>
            <button
              className={style.deleteButtonCart}
              onClick={() => handleAddToCart(cartItem)}> +
            </button>

          </div>
        </div>


      )}

    </>




  )
}
export default Cart
