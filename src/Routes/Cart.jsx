import React, { Component } from 'react';
import { connect } from "react-redux";
import {placeorder, addQuantity, reduceQuantity} from "../Redux/action";

class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phone:'',
            data : []
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount(){
        this.setState({
            data : this.props.data
        })
    }

    componentWillReceiveProps(){
        if(this.props.data !== this.state.data){
            this.setState({
                data : this.props.data
            })
        }
    }


    render() {
        const { placeorder, addQuantity, reduceQuantity } = this.props
        const { data } = this.state
        return (
            <>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={this.handleChange} name="name" />
                    <label>email</label>
                    <input type="text" onChange={this.handleChange} name="email" />
                    <label>phone</label>
                    <input type="text" onChange={this.handleChange} name="phone" />
                    <button onClick={()=>placeorder({name:this.state.name,email:this.state.email,phone:this.state.phone,data:this.state.data
                    })}>Place order</button>
                </div>
                {
                    data && data.map((data,index)=>{
                        return(
                            <div key={index} style={{display:"flex", flexDirection:"column", border:"1px solid black"}}>
                                <img src={data.item.img} alt={data.item.product_name} style={{width:"100px", height:"100px"}}/>
                                <label style={{padding:10}}>{data.item.product_name} </label>
                                <label style={{padding:10}}>{data.item.total || data.item.price} </label>
                                <label style={{padding:10}}>{data.item.id} </label>
                                <label style={{padding:10}}>{data.item.category} </label>
                                <div>
                                    <button style={{padding:10, margin:10}} onClick={()=>reduceQuantity(data)}> - </button>
                                    <span>{data.quantity}</span>
                                    <button style={{padding:10, margin:10}} onClick={()=>addQuantity(data)}> + </button>
                                </div>
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
    placeorder:(payload)=>dispatch(placeorder(payload)),
    addQuantity : payload => dispatch(addQuantity(payload)),
    reduceQuantity : payload => dispatch(reduceQuantity(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);