import data from "../Utils/productsData.json";
import {GET_DATA } from "./actionTypes";

const initState = {
    productData : data
}

const reducer = (state=initState, {type, payload})=>{
    switch(type){
        case GET_DATA :{
            return{
                ...state
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