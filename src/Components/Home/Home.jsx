/* eslint-disable no-unused-vars */

import { useGetAllProductsQuery } from "../../store/productsApi";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import React from "react";
import home from './Home.module.scss'
import Card from "../Card/Card";
import Category from "../Category/Category";
import Header from "../Header/header";
import style from '../Cart/Сart.module.scss'
import { Link } from "react-router-dom";
import crysmile from '../../img/crysmile.png'

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const users = useSelector((state) => state.user.users);
  const categoryName = useSelector((state) => state.filter.categoryName)
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.cartItems?.reduce((sum, obj) => obj.cartQuantity * obj.price + sum, 0)
  console.log()
  const product = useSelector((state) => state.products.items.filter((item) => item.category == categoryName));
  return (
    <div className={home.wrapper} >
      <Header />
      {
        isLoading ? (
          <p> Loading...</p>
        ) : error ? (
          <p>An error occured...</p>
        ) : (
          <>
            <div className={home.main}>

              <div className={home.addBlock}>
                <div className={home.addBlock_test}>
                  <div className={home.addBlock_item}>
                    <img src='https://kingsushi.pro/images/uploads/3462240e368ac98518bd753e86c6ebe6.webp' alt=""></img>
                  </div>

                  <div className={home.addBlock_item}>
                    <img src='https://sushiwok.ru/img/14d1ba7822c9ddbc15873e62d2dd3e1b' alt=""></img>

                  </div>
                  <div className={home.addBlock_item}>
                    <img src='https://static.tildacdn.com/tild3833-6434-4135-a135-666130373933/2stiHuLW0ymF6Phy4APF.jpg' alt=""></img>

                  </div>
                  <div className={home.addBlock_item}>
                    <img src='https://static.21vek.by/img/tmp/60b641ccdb4ce.jpeg' alt=""></img>

                  </div>
                  <div className={home.addBlock_item}>
                    <img src='https://pervymall.ru/upload/resize_cache/iblock/857/960_300_1/g3p19qxcdmpsj2vqha6i4fax36v6asxk.jpg' alt=""></img>

                  </div>

                </div>
              </div>

              <Category />

              <div className={home.items_container}>

                {data &&
                  product.map((obj) =>
                    <>
                      <Card
                        key={obj.id}
                        product={obj}
                        quantity={cart.cartItems.filter((item) => item.id == obj.id)}
                      />
                    </>
                  )}
              </div>
            </div>
            <div className={home.right}>
              <div className={style.wrapper}>
                <div className={style.header}>
                  <span>Корзина</span>
                </div>
                <div className={style.items_container}>
                  {cart.cartItems?.length == 0 ?

                    <div>
                      <img className={style.emptycart_cry} src={crysmile} alt='spsp'></img>
                      <h3 className={style.emptyCart}> В вашей корзине пока пусто </h3>
                    </div>
                    :
                    (
                      <>
                        <Cart />
                      </>
                    )}
                </div>
                <Link to={users.roles >= 1 ? '/checkout' : '/auth'} >
                  <button className={style.orderButton}> <span className="amount"> Верно, далее {totalPrice}₽</span></button>
                </Link>
              </div>
            </div>
          </>
        )
      }
    </div>

  )
}
export default Home;
