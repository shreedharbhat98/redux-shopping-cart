import React, { Component } from 'react';
import { connect } from "react-redux";
import {placeorder} from "../Redux/action";

class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phone:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const { data, placeorder } = this.props
        return (
            <>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={this.handleChange} name="name" />
                    <label>email</label>
                    <input type="text" onChange={this.handleChange} name="email" />
                    <label>phone</label>
                    <input type="text" onChange={this.handleChange} name="phone" />
                    <button onClick={()=>placeorder({name:this.state.name,email:this.state.email,phone:this.state.phone,data:data
                    })}>Place order</button>
                </div>
                {
                    data && data.map((data,index)=>{
                        return(
                            <div key={index} style={{display:"flex", flexDirection:"column", border:"1px solid black"}}>
                                <img src={data.img} alt={data.product_name} style={{width:"100px", height:"100px"}}/>
                                <label style={{padding:10}}>{data.product_name} </label>
                                <label style={{padding:10}}>{data.price} </label>
                                <label style={{padding:10}}>{data.id} </label>
                                <label style={{padding:10}}>{data.category} </label>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

const mapStateToProps = state => ({
    data: state.cartArray
})

const mapDispatchToProps = dispatch => ({
    placeorder:(payload)=>dispatch(placeorder(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);