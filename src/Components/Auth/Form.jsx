/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import style from './Auth.module.scss'
import { useForm } from 'react-hook-form'
import { setUser } from "../../store/userSlice";
const AuthForm = ({ handleClick }) => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const {
        register,
        formState: {
            errors,

        },

        handleSubmit,
    } = useForm({
        mode: 'onBlur'
    });

    return (
        <form onSubmit={handleSubmit(handleClick)}>

            <label>
                <input
                    {...register('email')} placeholder='Эл.почта'></input>
            </label>
            <label>
                <input
                    {...register('password', {
                        required: 'Поле обязательно к заполнению'

                    }
                    )} placeholder='Пароль'></input>
            </label>
            <div>{errors?.firstName && <p>{errors?.password?.message || "error!"}</p>}</div>
            <button type="submit" className={style.addButtontoCart}>Оплатить</button>

        </form>



    )
}
export default AuthForm
