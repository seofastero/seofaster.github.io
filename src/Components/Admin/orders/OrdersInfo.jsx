/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import style from './OrdersTrack.module.scss';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct } from '../../../store/managerSlice'
import { useForm } from 'react-hook-form'
import { useParams } from "react-router-dom";
import { ordersFetch, сhangeStatus } from "../../../store/managerSlice";

const OrdersInfo = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(ordersFetch())
    }, [])
    const { id } = useParams()
    const product = useSelector((state) => state.manager.orders.filter((item) => item.id == id));

    // const orderInfo = product[0]
    // console.log(orderInfo)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onAdd = (data) => {
        dispatch(addProduct(data));
        reset()

    };
    const onChangeStatus = (data) => {
        dispatch(сhangeStatus([{ status: data, id: product[0].id }]))
    }
    console.log(product)
    return (


        <div className={style.wrapper_info}>
            {product.loading && <span>Loading</span>}
            {!product.loading && product.error ? <span> Error </span> : null}
            {
                !product.loading && product.length ?
                    <>
                        <div className={style.deliveryInfo}>
                            <div className={style.totalize}>
                                <span>Итоговая сумма: {product[0].orderInfo.resultPrice}</span>
                                <span>Карта: {product[0].orderInfo.cardNumber}</span>

                            </div>
                            <div className={style.itemList}>
                                {product && product[0].deliveryInfo.map((item) =>
                                    <div className={style.item} key={item.id}>
                                        <span className={style.title}>{item.title}</span>
                                        <span className={style.quantity}>Кол-во: {item.cartQuantity}</span>
                                        <span className={style.price}>Цена: {item.price}</span>

                                    </div>
                                )}
                            </div>

                        </div>
                        <div className={style.orderInfo}>
                            <div className={style.addForm_wrapper}>
                                <div className={style.header}>
                                    <h4>Адресс: Заказчика</h4>
                                </div>
                                <div className={style.main}>
                                    <form onSubmit={handleSubmit(onAdd)}>

                                        <div className={style.rightSide}>
                                            <div className={style.orderDetails}>
                                                <input value={product[0].orderInfo.firstName}
                                                    {...register('firstName', {
                                                        required: true

                                                    }
                                                    )} placeholder='Имя'></input>
                                                <input value={product[0].orderInfo.email}
                                                    {...register('email')} placeholder='Эл.почта' ></input>
                                                <input value={product[0].orderInfo?.Adress}
                                                    {...register('Adress', {
                                                        required: true
                                                    }
                                                    )} placeholder='Ваш адрес'></input>

                                                <input value={product[0].orderInfo.Apart}
                                                    {...register('Apart', {
                                                        required: true
                                                    }
                                                    )} placeholder='Кв/Офис'></input>
                                                <input value={product[0].orderInfo.domofon}
                                                    {...register('domofon')} placeholder='Домофон'></input>
                                                <input value={product[0].orderInfo.podyezd}
                                                    {...register('podyezd')} placeholder='Подъезд'></input>
                                                <input value={product[0].orderInfo.stage}
                                                    {...register('stage')} placeholder='Этаж'></input>
                                                <input value={product[0].orderInfo.comment} className={style.input_comment}
                                                    {...register('comment')} placeholder='Комментарий к заказу'></input>


                                                <h5>Время доставки:</h5>
                                                <span>15:00</span>
                                            </div>


                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className={style.deliveryStatus}>
                            <label htmlFor="status" >Статус заказа:</label>

                            <select name="status" value={product[0].status} onChange={(e) => onChangeStatus(e.target.value)}>
                                <option value="Принято">Принято</option>
                                <option value="Готовиться">Готовиться</option>
                                <option value="Курьер">Курьер</option>
                                <option value="Завершен">Завершен</option>

                            </select>
                        </div>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4cd9d6ecfdb86631e20f751c6a5ee35069c227c0770beb53bb7663126b4734d7&amp;source=constructor" width="1250" height="700" frameBorder="0"></iframe>
                    </> : null}

        </div>

    )
}
export default OrdersInfo
