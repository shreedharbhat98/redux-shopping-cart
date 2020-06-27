import { ADD_TO_CART_DATA, ADD_TO_ORDERS_DATA, ADD_NEW_PRODUCT, EDIT_PRODUCT} from "./actionTypes";

export const addToCart = payload=>({
    type:ADD_TO_CART_DATA,
    payload
})

export const placeorder = payload=>({
    type:ADD_TO_ORDERS_DATA,
    payload
})

export const addNewProduct = payload=>({
    type:ADD_NEW_PRODUCT,
    payload
})


export const editProduct = payload=>({
    type:EDIT_PRODUCT,
    payload
})