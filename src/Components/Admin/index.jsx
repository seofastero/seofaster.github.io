/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import style from './Admin.module.scss'
import { useSelector } from "react-redux";
import { Outlet, Link } from 'react-router-dom';
const Admin = () => {
    const product = useSelector((state) => state.products.items.filter((item) => item.category));

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <nav className={style.menu}>
                    <div className={style.nav_header}>
                    </div>
                    <div className={style.nav_main}>
                        <Link to={'product/all'}>
                            <div className={style.nav_button}>
                                <img src="https://i.ibb.co/mvHq0ch/itemcat.png" alt=""></img>
                            </div>
                        </Link>

                        <Link to={'orders'}>
                            <div className={style.nav_button}>
                                <img src="https://i.ibb.co/HzHCw1Q/icons8-in-transit-100.png" alt=""></img>
                            </div>
                        </Link>

                        <Link to={'product/all'}>
                            <div className={style.nav_button1}>
                                <img src="https://i.ibb.co/VDg05H9/icons8-account-64.png" alt="" ></img>
                            </div>
                        </Link>

                        <Link to={'product/all'}>
                            <div className={style.nav_button}>
                                <img src="https://i.ibb.co/dgFmtv6/icons8-chat-room-96.png" alt=""></img>
                            </div>
                        </Link>

                        <Link to={'product/all'}>
                            <div className={style.nav_button}>
                                <img src="https://i.ibb.co/YWXhKSw/icons8-statistic-64.png" alt=""></img>
                            </div>
                        </Link>



                    </div>




                    <div className={style.nav_header}>
                        <img src="https://i.ibb.co/ZNZQHNZ/admin.png" alt="Peter Galanko" className={style.profile_image}></img>

                        <img src="https://i.ibb.co/MV59pMY/setting.png" alt=""></img>
                    </div>

                </nav>
                <>
                    <Outlet />
                </>
            </div>

        </div>

    )


}
export default Admin
