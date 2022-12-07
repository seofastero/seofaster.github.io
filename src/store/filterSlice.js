import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    categoryName: localStorage.getItem("category")
        ? JSON.parse(localStorage.getItem("category"))
        : 'Сеты',
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    },
};
const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {

        setCategoryName(state, action) {
            state.categoryName = action.payload;
            localStorage.setItem("category", JSON.stringify(state.categoryName));

        },

    }


});

export const { setCategoryName } = filterSlice.actions;
export default filterSlice.reducer;


