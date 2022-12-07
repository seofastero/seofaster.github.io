/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import style from './OrdersTrack.module.scss';
import { useDispatch, useSelector } from "react-redux";
import OrdersList from "./Orders";
import { ordersFetch } from "../../../store/managerSlice";
const OrdersTrack = () => {
    const manager = useSelector((state) => state.manager.orders);


    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(ordersFetch())
    }, [])
    const [category, setCategory] = React.useState('Все'
    );
    return (
        <div className={style.wrapper_orderList}>
            <div className={style.orderList_container}>
                <div className={style.header}>
                    <span>Все заказы</span>
                    <select className={style.categories} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Все">Все</option>
                        <option value="Принято">Приняты</option>
                        <option value="Готовиться">Готовятся</option>
                        <option value="Курьер">На доставке</option>
                        <option value="Завершен">Завершенные</option>
                    </select>
                </div>
                <div className={style.navbars}>


                </div>
                <div className={style.orderList}>
                    {category == 'Все' ?
                        manager.map((el) =>
                            <OrdersList key={el.id} orders={el} />

                        ) :

                        manager.filter((item) => item.status == category).map((el) =>
                            <OrdersList key={el.id} orders={el} />

                        )

                    }




                </div>
            </div>
            <>
                <Outlet />
            </>




        </div>
    )
}
export default OrdersTrack
