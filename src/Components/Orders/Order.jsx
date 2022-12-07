/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";
import style from './Orders.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { ordersFetch } from "../../store/managerSlice";
const Orders = () => {
    const cart = useSelector((state) => state.cart.ordersItem);
    const totalPrice = cart[0]?.reduce((sum, obj) => obj.cartQuantity * obj.price + sum, 0)
    const { id } = useParams()
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(ordersFetch())
    }, [])
    const manager = useSelector((state) => state.manager.orders.filter((item) => item.id == id));

    return (
        <div className={style.wrapper}>

            {manager.loading && <span>Loading</span>}
            {!manager.loading && manager.error ? <span> Error </span> : null}
            {
                !manager.loading && manager.length ?
                    <>
                        <div className={style.order_container}>
                            <div className={style.status_info}>
                                <h3>Заказ #{id}</h3>
                                <h4>{manager[0].status}</h4>
                            </div>
                            <div className={style.statusbar}>
                                <div className={style.statusbar_points} style={manager[0].statusID >= 1 ? { backgroundColor: 'aquamarine' } : { backgroundColor: 'whitesmoke' }}>
                                    <img src="https://i.ibb.co/6s9TfNJ/task.png" alt=""></img>
                                </div>
                                <div className={style.statusbar_line}></div>
                                <div className={style.statusbar_points} style={manager[0].statusID >= 2 ? { backgroundColor: 'aquamarine' } : { backgroundColor: 'whitesmoke' }}>
                                    <img src="https://i.ibb.co/92gLJFf/cooking.png" alt=""></img>
                                </div>
                                <div className={style.statusbar_line}></div>
                                <div className={style.statusbar_points} style={manager[0].statusID >= 3 ? { backgroundColor: 'aquamarine' } : { backgroundColor: 'whitesmoke' }}>
                                    <img src="https://i.ibb.co/XWLypvQ/running.png" alt="" ></img>
                                </div>
                                <div className={style.statusbar_line}></div>
                                <div className={style.statusbar_points} style={manager[0].statusID >= 4 ? { backgroundColor: 'aquamarine' } : { backgroundColor: 'whitesmoke' }}>
                                    <img src="https://i.ibb.co/cvgHrfV/ready.png" alt=""></img>
                                </div>

                            </div>
                            <div className={style.orderInfo}>
                                <div className={style.courierInfo}>
                                    <h3>Ваш курьер: Денис</h3>
                                    <button className={style.number}>Связаться</button>
                                </div>
                                <div className={style.orderItems}>
                                    <span>Товары</span>
                                    {manager[0].deliveryInfo.map((item) =>
                                        <div className={style.orderItem} key={item.id}>
                                            <h5 className={style.orderItem_title}>{item.title}</h5>
                                            <h5>Количество: {item.cartQuantity}</h5>
                                            <h5>Цена: {item.price}Р</h5>
                                        </div>

                                    )}

                                </div>
                                <div className={style.resultOrder}>
                                    <h5>Оплата картой: Mastercard {manager[0].orderInfo.cardNumber}</h5>
                                    <h5>Итого: {manager[0].orderInfo.totalPrice}рублей</h5>

                                </div>
                                <div className={style.buyerinfo}>

                                </div>
                            </div>

                        </div>
                    </> : null}
        </div>
    )
}
export default Orders
