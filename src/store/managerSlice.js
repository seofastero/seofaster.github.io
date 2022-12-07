/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    orders: []


    ,
    cartTotalAmount: 0,
};
export const ordersFetch = createAsyncThunk(
    "orders/ordersFetch", () => {
        return axios
            .get('http://localhost:3003/orders').then((response) => response.data);
    });

const managerSlice = createSlice({
    name: "manager",
    initialState,
    reducers: {


        removeProduct(state, action) {
            axios.delete(`http://localhost:3003/product/${action.payload.id}`);

            console.log(action.payload.id)
        },
        changeProduct(state, action) {
            console.log(action.payload)
            axios({
                method: 'put',
                url: `http://localhost:3003/product/${action.payload.id}/`,
                data: {
                    id: (action.payload.id),
                    imageUrl: (action.payload.imageUrl),
                    title: (action.payload.title),
                    price: (action.payload.price),
                    weight: (action.payload.weight),
                    quantity: (action.payload.quantity),
                    category: (action.payload.category),
                    hidden: (action.payload.hidden),

                },

            })
        },
        addProduct(state, action) {
            console.log(action.payload)
            axios({
                method: 'post',
                url: `http://localhost:3003/product/`,
                data: {
                    imageUrl: (action.payload.imageUrl),
                    title: (action.payload.title),
                    price: (action.payload.price),
                    weight: (action.payload.weight),
                    quantity: (action.payload.quantity),
                    category: (action.payload.category),
                    hidden: (action.payload.hidden),

                },

            })

        },
        addOrder(state, action) {
            console.log(action.payload)
            axios({
                method: 'post',
                url: `http://localhost:3003/product/`,
                data: {
                    imageUrl: (action.payload.imageUrl),
                    title: (action.payload.title),
                    price: (action.payload.price),
                    weight: (action.payload.weight),
                    quantity: (action.payload.quantity),
                    category: (action.payload.category),
                    hidden: (action.payload.hidden),

                },

            })

        },
        сhangeStatus(state, action) {
            console.log(action.payload[0].id)
            if (action.payload[0].status == 'Готовиться') {
                state.statusLine = 2
            } else if (action.payload[0].status == 'Курьер') {
                state.statusLine = 3

            } else if (action.payload[0].status == 'Завершен') {
                state.statusLine = 4

            }
            axios({
                method: 'patch',
                url: `http://localhost:3003/orders/${action.payload[0].id}/`,
                data: {
                    status: action.payload[0].status,
                    statusID: state.statusLine
                },

            })

        },
    },
    extraReducers: {
        [ordersFetch.pending]: (state, action) => {
            state.status = "pending";

        },
        [ordersFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.orders = action.payload;

        },
        [ordersFetch.rejected]: (state, action) => {
            state.status = "rejected";
            state.orders = action.payload;
        },
    },

})
export const { removeProduct, changeProduct, addProduct, сhangeStatus } = managerSlice.actions;

export default managerSlice.reducer;
