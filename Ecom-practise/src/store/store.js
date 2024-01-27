import { configureStore } from '@reduxjs/toolkit'
import productListSliceReducer from '../Features/Product/ProductListSlice'
export const store = configureStore({
    reducer: {
        productList: productListSliceReducer
    },
})