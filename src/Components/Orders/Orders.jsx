/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import style from './Orders.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { ordersFetch } from "../../store/managerSlice";
import OrdersAll from "./OrdersAll";
const Orders = () => {
    const cart = useSelector((state) => state.cart.ordersItem);
    const totalPrice = cart[0]?.reduce((sum, obj) => obj.cartQuantity * obj.price + sum, 0);
    const users = useSelector((state) => state.user);
    console.log(users.email)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(ordersFetch())
    }, [])
    const manager = useSelector((state) => state.manager.orders);

    return (
        <div className={style.layout}>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.header}>
                        <h3>Мои заказы</h3>
                    </div>
                    <div className={style.navbar}>
                        <button className={style.buttonSwitch}>Активные</button>
                        <button className={style.buttonSwitch}>История</button>

                    </div>
                    <div className={style.orderList}>
                        {manager.filter((item) => item.orderInfo.email == users.users.email).map((el) =>
                            <OrdersAll key={el.id} orders={el} />

                        )}

                    </div>
                </div>


            </div>
        </div>
    )
}
export default Orders
