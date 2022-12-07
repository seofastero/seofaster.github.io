import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "../store/productsSlice"
import { productsApi } from "../store/productsApi";
import cartReducer from "../store/cartSlice";
import filterSlice from "./filterSlice";
import userReducer from "./userSlice";
import managerReducer from "./managerSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        user: userReducer,
        filter: filterSlice,
        manager: managerReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

export default store