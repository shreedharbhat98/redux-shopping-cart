import data from "../Utils/productsData.json";
import { ADD_TO_CART_DATA, ADD_TO_ORDERS_DATA, ADD_NEW_PRODUCT, EDIT_PRODUCT, ADD_QUANTITY, REDUCE_QUANTITY } from "./actionTypes";

const initState = {
    productData: data,
    cartArray: [],
    orderArray: []
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART_DATA: {
            let item = state.productData.find(ele => ele.id == payload.item);
            return {
                ...state,
                cartArray: [...state.cartArray, { item: item, quantity: payload.quantity }]
            }
        }

        case ADD_TO_ORDERS_DATA: {
            const { name, email, phone, data } = payload
            return {
                ...state,
                orderArray: [...state.orderArray, { name: name, email: email, phone: phone, data: data }]
            }
        }

        case ADD_NEW_PRODUCT: {
            console.log(payload)
            return {
                ...state,
                productData: [...state.productData, payload]
            }
        }

        case EDIT_PRODUCT: {
            console.log(payload)
            return {
                ...state,
                productData: state.productData.map(item => item.id === payload.id ? payload : item)
            }
        }

        case ADD_QUANTITY: {
            let newItem = {}
            state.cartArray.map((item) => {
                if (item.item.id === payload.item.id) {

                    newItem = {
                        item: {
                            id: item.item.id,
                            product_name: item.item.product_name,
                            price: Number(item.item.price),
                            category: item.item.category,
                            img: item.item.img,
                            total: (Number(item.item.price) * Number(payload.quantity))
                        },
                        quantity: payload.quantity
                    }
                }
            })
            return {
                ...state,
                cartArray: state.cartArray.map(item => item.id === payload.id ? newItem : item),

            }
        }

        case REDUCE_QUANTITY: {
            let newItem = {}
            state.cartArray.map((item) => {
                if (item.item.id === payload.item.id) {

                    newItem = {
                        item: {
                            id: item.item.id,
                            product_name: item.item.product_name,
                            price: Number(item.item.price),
                            category: item.item.category,
                            img: item.item.img,
                            total: (Number(item.item.price) * Number(payload.quantity))
                        },
                        quantity: payload.quantity
                    }
                }
            })
            return {
                ...state,
                cartArray: state.cartArray.map(item => item.id === payload.id ? newItem : item),

            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer;