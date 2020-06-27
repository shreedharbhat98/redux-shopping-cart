import React from 'react';

function SingleItem(props){
    const { data,addToCart } = props
    return(
        <div style={{display:"flex", flexDirection:"column", border:"1px solid black"}}>
            <img src={data.img} alt={data.product_name} style={{width:"100px", height:"100px"}}/>
            <label style={{padding:10}}>{data.product_name} </label>
            <label style={{padding:10}}>{data.price} </label>
            <label style={{padding:10}}>{data.id} </label>
            <label style={{padding:10}}>{data.category} </label>
            <button onClick={()=>addToCart(data.id)} >Add to cart</button>
        </div>
    );
}
export default SingleItem;