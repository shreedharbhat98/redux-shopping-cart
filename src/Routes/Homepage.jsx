import React, { Component } from 'react';
import { connect } from "react-redux";
import SingleItem from "../Components/SingleItem";
import {addToCart} from "../Redux/action";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionName:''
        };
    }

    handleChange=(e)=>{
        this.setState({
            optionName:e.target.value
        })
    }

    render() {
        const { data, addToCart } = this.props
        console.log(data)

        return (
            <>
                <div>
                    <select onChange={this.handleChange}>
                        <option value="all">ALL</option>
                        {
                            data && data.map((ele,index)=>{
                                return(<option value={ele.category}>{ele.category}</option>)
                            })
                        }
                    </select>
                </div>
                {data && data.filter(ele=>{
                    if(ele.category==this.state.optionName)
                        return true
                    if(this.state.optionName =="" || this.state.optionName=="all")
                        return true
                }).map((item, index) =>
                    <div key={index} >
                        <SingleItem data={item} addToCart={addToCart}/>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    data: state.productData
})

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);