/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import style from './Auth.module.scss';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "./Form";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from "react-router-dom";
import { setUser } from "../../store/userSlice";

const Register = () => {
    const navigate = useNavigate();
    const { email, token, id } = useSelector(state => state.user)
    const cart = useSelector((state) => state.cart.ordersItem);
    const totalPrice = cart[0]?.reduce((sum, obj) => obj.cartQuantity * obj.price + sum, 0)
    const dispatch = useDispatch();
    const handleRegister = (data) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(({ user }) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate("/");

            }
            )
            .catch(console.error)


    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <AuthForm handleClick={handleRegister} buttonText={'Зарегистрироваться'} />
                <Link to={'/auth'}>Войти</Link>

            </div>
        </div>
    )
}
export default Register
