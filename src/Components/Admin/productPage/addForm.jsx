/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import style from './addForm.module.scss'
import { useDispatch } from "react-redux";
import { addProduct } from '../../../store/managerSlice'
import { useForm } from 'react-hook-form'

const AddForm = () => {
    const [item, setItem] = React.useState({
        imageUrl: 'https://i.ibb.co/5FXvvrG/example.png',
        title: 'Сет Превью',
        weight: 989,
        price: 568,
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const onAdd = (data) => {
        dispatch(addProduct(data));
        setItem(data);
        reset()

    };
    const onPreview = (data) => {
        setItem(data);
    };
    return (
        <div className={style.addForm_wrapper}>
            <div className={style.header}>
                <h2>Добавить продукт</h2>
            </div>
            <div className={style.main}>
                <form onSubmit={handleSubmit(onAdd)}>

                    <input type="url" placeholder="Ссылка на изображение" list="imageUrl"    {...register("imageUrl", { required: true, maxLength: 200 })} />
                    <input type="text" placeholder="Название продукта"
                        {...register("title", { required: true, maxLength: 80 })} />
                    <input type="number" placeholder="Цена"   {...register("price", { required: true, maxLength: 5, Min: 1 })} />
                    <input type="number" placeholder="Вес" {...register("weight", { required: true, })} />
                    <select  {...register("category", { required: true })}>
                        <option value="Сеты">Сеты</option>
                        <option value="Классические">Классические</option>
                        <option value="Суши и Гунканы">Суши и Гунканы</option>
                        <option value="Супы">Супы</option>
                        <option value="Напитки">Напитки</option>
                        <option value="Десерты">Десерты</option>
                    </select>
                    <input type="hidden" value="0" {...register("quantity", { required: true })} />
                    <select  {...register("hidden", { required: true })}>
                        <option value={false}>Видно</option>
                        <option value={true}>Скрыто</option>
                    </select>
                    <button className={style.submitBtn} onClick={handleSubmit(onPreview)}>Preview</button>

                    <button className={style.submitBtn} type='submit'>Добавить</button>

                </form>

                <div className={style.itemContainer}>

                    <img src={item.imageUrl} alt="sushka"></img>
                    <span className={style.itemName}>{item.title}</span>
                    <span className={style.itemPrice}>{item.price}₽</span>
                    <span className={style.itemWeight}>{item.weight}гр</span>

                    <button className={style.addButtontoCart} >+ Добавить</button>
                </div>
            </div>
        </div >


    )


}
export default AddForm
