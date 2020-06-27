import data from "../Utils/productsData.json";
import {ADD_TO_CART_DATA, ADD_TO_ORDERS_DATA } from "./actionTypes";

const initState = {
    productData : data,
    cartArray:[],
    orderArray:[]
}

const reducer = (state=initState, {type, payload})=>{
    switch(type){
        case ADD_TO_CART_DATA :{
            let item=state.productData.find(ele=>ele.id==payload);
            return{
                ...state,
                cartArray:[...state.cartArray,item]
            }
        }

        case ADD_TO_ORDERS_DATA :{
            const {name,email,phone,data}=payload
            return{
                ...state,
                orderArray:[...state.orderArray,{name:name,email:email,phone:phone,data:data}]
            }
        }
        
        default :{
        console.log(payload)
            return {
                ...state
            }
        }
    }
}

export default reducer;