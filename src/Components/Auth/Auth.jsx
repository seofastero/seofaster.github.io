/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import style from './Auth.module.scss';
import { useNavigate } from 'react-router-dom'
import { setUser } from "../../store/userSlice";

import { useDispatch, useSelector } from "react-redux";
import AuthForm from "./Form";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from "react-router-dom";
const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, token, id } = useSelector((state) => state.user)
    const handleLogin = (data) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(({ user }) => {
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
                <AuthForm handleClick={handleLogin} />
                <Link to={'/register'}>Регистрация</Link>
            </div>
        </div>
    )
}
export default Auth
