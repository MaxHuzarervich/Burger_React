import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from './category/categorySlice'
import productReducer from './product/productSlice'
import orderReducer, {localStorageMiddleware} from './Order/OrderSlice'

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReducer
    },

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(localStorageMiddleware)
    }
})