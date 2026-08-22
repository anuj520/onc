import { configureStore } from "@reduxjs/toolkit";
import taskReduser from "./taskSlice"

export const store = configureStore({
    reducer:{
        taskReduser,
    },
})