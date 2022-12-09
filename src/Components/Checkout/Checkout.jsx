/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { onAddToOrder } from "../../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import Cart from '../Cart/Cart'
import style from './Checkout.module.scss'
import ordersuc from '../../img/order_suc.png'
import { Link, redirect } from "react-router-dom";
import { useForm } from 'react-hook-form'
import userSlice from "../../store/userSlice";
const Checkout = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const users = useSelector((state) => state.user.users);

    const onClickToOrder = (data) => {
        dispatch(onAddToOrder([cart.cartItems, data]));
    }
    const totalPrice = cart.cartItems?.reduce((sum, obj) => obj.cartQuantity * obj.price + sum, 0)
    const serviceFee = 89;
    const deliveryFee = 120;
    const resultPrice = totalPrice + deliveryFee + serviceFee;
    const {
        register,
        formState: {
            errors,

        },
        reset,
        handleSubmit,
    } = useForm({
        mode: 'onBlur'
    });

    return (

        <div className={style.wrapper_order}>
            <div className={style.orderMenu}>
                <div className={style.orderList}>
                    <div className={style.cartitems_wrapper}>
                        {users.id == null ? <span>Неизвестно</span> : <span> {users.email}</span>}

                        <h1>Ваш заказ</h1>

                        <Cart />



                    </div>

                    <form onSubmit={handleSubmit(onClickToOrder)}>

                        <div className={style.rightSide}>
                            <div className={style.orderDetails}>
                                <h4>Личные данные:</h4>
                                <label>
                                    <input
                                        {...register('firstName', {
                                            required: 'Поле обязательно к заполнению'

                                        }
                                        )} placeholder='Имя'></input>
                                </label>
                                <div>{errors?.firstName && <p>{errors?.firstName?.message || "error!"}</p>}</div>
                                <label>
                                    <input
                                        {...register('email')} placeholder='Эл.почта'></input>
                                </label>
                                <label>
                                    <input
                                        {...register('Adress', {
                                            required: 'Поле обязательно к заполнению'
                                        }
                                        )} placeholder='Ваш адрес'></input>
                                </label>

                                <div>{errors?.firstName && <p>{errors?.Adress?.message || "error!"}</p>}</div>
                                <label>
                                    <input
                                        {...register('Apart', {
                                            required: 'Поле обязательно к заполнению'
                                        }
                                        )} placeholder='Кв/Офис'></input>
                                </label>
                                <div>{errors?.firstName && <p>{errors?.Apart?.message || "error!"}</p>}</div>
                                <label>
                                    <input
                                        {...register('domofon')} placeholder='Домофон'></input>
                                </label>
                                <label>
                                    <input
                                        {...register('podyezd')} placeholder='Подъезд'></input>
                                </label>
                                <label>
                                    <input
                                        {...register('stage')} placeholder='Этаж'></input>
                                </label>
                                <label>
                                    <input
                                        {...register('comment')} placeholder='Комментарий к заказу'></input>
                                </label>
                                <input type='hidden' value={deliveryFee}
                                    {...register('deliveryFee')} ></input>
                                <input type='hidden' value={serviceFee}
                                    {...register('serviceFee')} ></input>
                                <input type='hidden' value={totalPrice}
                                    {...register('totalPrice')} ></input>
                                <input type='hidden' value={resultPrice}
                                    {...register('resultPrice')} ></input>

                                <h5>Время доставки:</h5>
                                <span>15:00</span>
                            </div>
                            <div className={style.paymentsDetails}>
                                <div className={style.paydetails_cointainer}>
                                    <h2>Способ оплаты</h2>
                                    <span>Привязать новую карту</span>
                                    <input type='number'
                                        {...register('cardNumber')} placeholder='Номер карты'></input>
                                    <h2>Итого</h2>
                                    <span>Стоимость товара: {totalPrice}P</span>
                                    <span>Доставка: {deliveryFee}P</span>
                                    <span>Работа сервиса: {serviceFee}P</span>
                                    <button type="submit" className={style.addButtontoCart}>Оплатить</button>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>




            </div>

            {
                cart.cartItems.length == 0 ? (
                    <div className={style.succes_wrapper}>
                        <div className={style.succes_container}>
                            <div className={style.sw_header}>
                                <Link to={'/'} className={style.link_back}><span>Назад</span></Link>
                                <Link to={'/orders'} className={style.link_back}><span>К заказам</span></Link>
                            </div>
                            <div className={style.succes_main}>
                                <img src={ordersuc} className={style.orderImg} alt="order" />
                                <div className={style.succes_text}>
                                    <h2 className={style.thanks}>Спасибо! </h2>
                                    <h2>Заказ принят </h2>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (<span>.</span>)
            }
        </div>
    )
}
export default Checkout
