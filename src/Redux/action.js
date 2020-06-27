import { ADD_TO_CART_DATA, ADD_TO_ORDERS_DATA} from "./actionTypes";

export const addToCart = payload=>({
    type:ADD_TO_CART_DATA,
    payload
})

export const placeorder = payload=>({
    type:ADD_TO_ORDERS_DATA,
    payload
})