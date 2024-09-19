import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "userdata",
    initialState: {
        userdata: null
    },
    reducers: {
        
        login: (state, action) => {
            state.userdata = action.payload
        },
        logout: (state) => {
            state.userdata = null
        }
    }
})
export const { login, logout } = UserSlice.actions
export const selectUser = (state) => state.userdata.userdata
export default UserSlice.reducer