import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

const mainStore = configureStore ({
    reducer: {
        user: userReducer
    }
})

export default mainStore