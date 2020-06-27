import { ADD_TO_CART_DATA, ADD_TO_ORDERS_DATA, ADD_NEW_PRODUCT, EDIT_PRODUCT, ADD_QUANTITY, REDUCE_QUANTITY} from "./actionTypes";

export const addToCart = payload=>({
    type:ADD_TO_CART_DATA,
    payload :{
        item : payload,
        quantity:1
    }
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

export const addQuantity = payload=>({
    type:ADD_QUANTITY,
    payload:{
        item : payload.item,
        quantity : payload.quantity+1 || 1
    }
})

export const reduceQuantity = payload=>({
    type:REDUCE_QUANTITY,
    payload:{
        item : payload.item,
        quantity : payload.quantity-1 || 1
    }
})
