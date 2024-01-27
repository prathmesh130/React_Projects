import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    category: [],
    loading: false,
    error: null,
}
export const ROCKET_URL = 'https://dummyjson.com/products';
export const fetchProducts = createAsyncThunk(
    'productSLice/fetchProducts',
    async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
)
export const fetchCategories = createAsyncThunk('productSLice/fetchCategories',
    async () => {
        const response = await fetch('https://dummyjson.com/products/categories')
        const data = await response.json()
        return data
    }
)

export const ProductListSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        // add: (state, action) => {
        //     state.value.push(...action.payload)
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.value.push(action.payload)
                state.loading = false
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.category.push(action.payload)
                // const cat = new Set()
                // action.payload.forEach(ele => cat.add(ele))
                // state.category = cat
            })
    }
})

// Action creators are generated for each case reducer function
export const { addCategory } = ProductListSlice.actions

export default ProductListSlice.reducer