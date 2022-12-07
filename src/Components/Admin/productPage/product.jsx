/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from './Product.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, changeProduct } from '../../../store/managerSlice'
import { useForm } from 'react-hook-form'

const Product = ({ item }) => {
    const [isOpened, setOpened] = React.useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(removeProduct(item));
    };
    const onChangeInput = (data) => {
        dispatch(changeProduct(data));
    };
    return (
        <div className={styles.itemContainer} key={item.key}>
            {isOpened == false ?

                (<>

                    <img src={item.imageUrl} alt="sushka"></img>
                    <span className={styles.itemName}>{item.title}</span>
                    <span className={styles.itemPrice}>{item.price}₽</span>
                    <span className={styles.itemWeight}>{item.weight}гр</span>

                    <div className={styles.button_menu}>
                        <button className={styles.button_option_delete} onClick={() => onDelete()}>Удалить</button>
                        <button className={styles.button_option_change} onClick={() => setOpened(!isOpened)}>Изменить</button>
                    </div>


                </>) : (
                    <form onSubmit={handleSubmit(onChangeInput)}>
                        <input type="hidden" value={item.id} {...register("id", { required: true })} />
                        <input type="url" placeholder="imageUrl" list="imageUrl" defaultValue={item.imageUrl}  {...register("imageUrl", { required: false, maxLength: 200 })} />
                        <input type="text" placeholder="title" defaultValue={item.title}
                            {...register("title", { required: true, maxLength: 80 })} />
                        <input type="text" placeholder="Price" defaultValue={item.price}  {...register("price", { required: true, maxLength: 100 })} />
                        <input type="text" placeholder="weight" defaultValue={item.weight} {...register("weight", { required: true, })} />
                        <select defaultValue={item.category} {...register("category", { required: true })}>
                            <option value="Сеты">Сеты</option>
                            <option value="Классические">Классические</option>
                            <option value="Суши и Гунканы">Суши и Гунканы</option>
                            <option value="Супы">Супы</option>
                            <option value="Напитки">Напитки</option>
                            <option value="Десерты">Десерты</option>
                        </select>
                        <input type="hidden" value="0" {...register("quantity", { required: true })} />
                        <select defaultValue={item.hidden} {...register("hidden", { required: true })}>
                            <option value={false}>Видно</option>
                            <option value={true}>Скрыто</option>
                        </select>

                        <button type="submit" className={styles.submitButton_option} > Отправить </button>

                        <button className={styles.submitButton_option} onClick={() => setOpened(!isOpened)}>Отменить</button>

                    </form>


                )
            }

        </div>



    )


}
export default Product
