import { configureStore } from "@reduxjs/toolkit"
import colorReducer from "./redux/colorSlice";

export const store = configureStore({
    reducer: {
        color: colorReducer
    }
})