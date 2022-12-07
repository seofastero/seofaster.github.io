import { Link } from 'react-router-dom';
import React from "react";
import logo from '../../logo.svg'


import style from './Header.module.scss'
import { useSelector } from 'react-redux';
const Header = () => {

    const users = useSelector((state) => state.user.users);
    console.log(users)
    return (
        <header className={style.Appheader}>
            <div className={style.lheader}>
                <Link to="/">
                    <img src={logo} className={style.Applogo} alt='' />
                </Link>

            </div>
            <div className={style.rheader}>
                <div className={style.profilebar}>
                    {users.roles >= 1 ? (
                        <Link to="/profile">
                            <span>Профиль </span>
                        </Link>
                    ) :
                        <Link to="/auth">
                            <span>Войти</span>

                        </Link>
                    }
                </div>
                {users.roles >= 1 ? (

                    <div className={style.ordersbar}>

                        <Link to="/orders">
                            <span>Заказы</span>

                        </Link> </div>
                ) : null
                }

            </div>

        </header>
    )
}
export default Header;
