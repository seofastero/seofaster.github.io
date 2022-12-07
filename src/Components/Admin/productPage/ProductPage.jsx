/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import style from './Product.module.scss'
import { useSelector } from "react-redux";
import Product from "./product";
import { Routes, Route, Outlet, Link } from "react-router-dom";
const ProductPage = () => {
    const product = useSelector((state) => state.products.items.filter((item) => item.category));


    return (

        <main className={style.main}>
            <div className={style.info_left}>
                <ul>
                    <Link to={'all'}><li> Управление продуктами</li></Link>
                    <Link to={'add'}><li> Добавить продукт</li></Link>
                </ul>
            </div>
            <div className={style.info_main}>
                <Outlet />


                <>

                </>
            </div>

        </main>

    )


}
export default ProductPage
