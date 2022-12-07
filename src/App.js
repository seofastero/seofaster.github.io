import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home.jsx';
import NotFound from './Components/NotFound';
import Checkout from './Components/Checkout/Checkout'
import Orders from './Components/Orders/Orders'
import Order from './Components/Orders/Order'
import Auth from './Components/Auth/Auth';
import Register from './Components/Auth/Reg';
import './firebase';
import Admin from './Components/Admin/index.jsx';
import ProductPage from './Components/Admin/productPage/ProductPage';
import AddForm from './Components/Admin/productPage/addForm';
import ProductList from './Components/Admin/productPage/productList';
import OrdersTrack from './Components/Admin/orders/OrdersTrack';
import OrdersInfo from './Components/Admin/orders/OrdersInfo';
import { useSelector } from 'react-redux'

function App() {

    const users = useSelector((state) => state.user.users);
    console.log(users)
    return (

        <div className="App">

            <Routes>
                <Route exact path="/" element={<Home />} />
                {users.roles >= 1 &&
                    <>
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/orders/:id" element={<Order />} />

                        <Route path="/checkout" element={<Checkout />} />
                    </>


                };
                <Route path='/auth' element={<Auth />} />
                <Route path='/register' element={<Register />} />
                {users.roles == 2 &&

                    <Route path="admin/*" element={<Admin />}>
                        <Route path="product/*" element={<ProductPage />}>
                            <Route path="all" element={<ProductList />} />
                            <Route path="add" element={<AddForm />} />
                        </Route>
                        <Route path="orders/*" element={<OrdersTrack />}>
                            <Route path=":id" element={<OrdersInfo />} />
                            {/* <Route path="add" element={<AddForm />} /> */}
                        </Route>
                    </Route>
                };

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )

}
export default App
