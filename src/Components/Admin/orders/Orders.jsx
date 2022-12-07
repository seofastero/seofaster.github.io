/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import style from './OrdersTrack.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { ordersFetch } from '../../../store/managerSlice'

const OrdersList = ({ orders }) => {
  
    const cart = useSelector((state) => state.cart.ordersItem);
    const totalPrice = cart[0]?.reduce((sum, obj) => obj.cartQuantity * obj.price + sum, 0)
    return (
        <Link to={`${orders.id}`}>
            <div className={style.order}>
                <div className={style.left}>
                    <img src='https://i.ibb.co/kXDPqVH/Rectangle-24.png' alt='Петушок'></img>
                </div>
                <div className={style.main}>
                    <span>Статус заказа:</span>
                    <span>{orders.status}</span>
                </div>
                <div className={style.right}>
                    <span>Заказ #{orders.id}</span>
                    <span>{orders.orderDate} {orders.orderTime}</span>

                </div>

            </div>
        </Link>



    )
}
export default OrdersList
