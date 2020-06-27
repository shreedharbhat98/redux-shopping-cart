import React, { Component } from 'react';
import { connect } from "react-redux";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { data } = this.props
        return (
            <>
            {
                data && data.map((ele,index)=>{
                    return(
                        <div key={index}>
                            <div>
                                <label>Name : {ele.name}</label>
                                <label>email : {ele.email}</label>
                                <label>phone : {ele.phone}</label>
                            </div>
                            {
                                ele && ele.data.map((data,index)=>{
                                    return(
                                        <div key={index} style={{display:"flex", flexDirection:"column", border:"1px solid black"}}>
                                            <img src={data.item.img} alt={data.item.product_name} style={{width:"100px", height:"100px"}}/>
                                            <label style={{padding:10}}>{data.item.product_name} </label>
                                            <label style={{padding:10}}>Price : {data.item.total || data.item.price} </label>
                                            <label style={{padding:10}}>{data.item.id} </label>
                                            <label style={{padding:10}}>{data.item.category} </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            </>
        );
    }
}

const mapStateToProps = state => ({
    data: state.orderArray
})

export default connect(
    mapStateToProps,
    null
)(Orders);