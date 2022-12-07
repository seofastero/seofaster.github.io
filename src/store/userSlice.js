import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    users: localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : { roles: 0 },


};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            if (action.payload.email == 'allintv14@gmail.com') {
                const tempProduct = {
                    email: action.payload.email,
                    id: action.payload.id,
                    token: action.payload.token,
                    roles: 2,
                }

                localStorage.setItem("users", JSON.stringify(tempProduct));
            } else {
                const tempProduct = {
                    email: action.payload.email,
                    id: action.payload.id,
                    token: action.payload.token,
                    roles: 1,
                }

                state.users = tempProduct

                localStorage.setItem("users", JSON.stringify(state.users));
            }








        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },

})
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;