/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import style from './Product.module.scss'
import { useSelector } from "react-redux";
import Product from "./product";
import { Routes, Route } from "react-router-dom";
const ProductList = () => {
    const [category, setCategory] = React.useState('Сеты')
    const product = useSelector((state) => state.products.items.filter((item) => item.category == category));


    return (
        <div className={style.wrapper_productList}>
            <div className={style.header}>
                <h2>Все продукты</h2>
                <select className={style.categories} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Сеты">Сеты</option>
                    <option value="Классические">Классические</option>
                    <option value="Суши и Гунканы">Суши и Гунканы</option>
                    <option value="Супы">Супы</option>
                    <option value="Напитки">Напитки</option>
                    <option value="Десерты">Десерты</option>
                </select>
            </div>
            <div className={style.productList}>
                {product.map((el) =>

                    <Product key={el.id}
                        item={el} />
                )}
            </div>

        </div>
    )


}
export default ProductList
