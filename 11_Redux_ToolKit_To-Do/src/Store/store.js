import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Features/ToDo/ToDo_Slice'


export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})