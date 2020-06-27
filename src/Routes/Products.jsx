import React, { Component } from 'react';
import { connect } from "react-redux";
import SingleItem from "../Components/SingleItem";
import {addToCart, addNewProduct, editProduct} from "../Redux/action";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            name:"",
            id:"",
            category:"",
            price:"",
            image:"",
            editName:"",
            editId:"",
            editCategory:"",
            editPrice:"",
            editImage:""
        };
    }

    componentDidMount(){
        const { id } = this.props.match ? this.props.match.params : "";

        if(id != undefined){
            let items = this.props.data.find(item=> item.id == id)
            this.setState({
                data : [...this.state.data, items ]
            })
        }

        if(id == undefined){
            console.log(id)
            this.setState({
                data :this.props.data
            })
        }
        console.log(id)
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentWillReceiveProps(props){
        const { data } = props
        if(data !== this.state.data){
            this.setState({
                data : data
            })
        }

    }
    render() {
        const { data } = this.state
        const {addNewProduct, editProduct} = this.props
        return (
            <>
                <div>
                    <label> Product Name :</label>
                    <input type="text" onChange={this.handleChange} name="name"/>

                    <label> ID :</label>
                    <input type="text" onChange={this.handleChange} name="id"/>

                    <label> Category :</label>
                    <input type="text" onChange={this.handleChange} name="category"/>

                    <label> Price :</label>
                    <input type="text" onChange={this.handleChange} name="price"/>

                    <label> Image url :</label>
                    <input type="text" onChange={this.handleChange} name="image"/>

                    <button onClick={()=>addNewProduct({
                    product_name : this.state.name,
                    id:this.state.id,
                    category:this.state.category,
                    price:this.state.price,
                    img:this.state.image
                    })}> Add new Product </button>

                    <br/>
                    <label style={{margin:10}}> Product Name :</label>
                    <input style={{margin:10}} type="text" onChange={this.handleChange} name="editName"/>
                    <br/>
                    <label style={{margin:10}}>Select ID:</label>
                    <select style={{margin:10}} onChange={this.handleChange} name="editId">
                        <option value="">Select</option>
                    {data && data.map(item=>
                        <option value={item.id}> {item.id}</option>
                        )}
                    </select>
                    <br/>
                    <label style={{margin:10}}> Category :</label>
                    <input style={{margin:10}} type="text" onChange={this.handleChange} name="editCategory"/>
                        <br/>
                    <label style={{margin:10}}> Price :</label>
                    <input style={{margin:10}} type="text" onChange={this.handleChange} name="editPrice"/>
                        <br/>
                    <label style={{margin:10}}> Image url :</label>
                    <input style={{margin:10}} type="text" onChange={this.handleChange} name="editImage"/>
                    <br/>

                    <button onClick={()=>editProduct({
                        product_name : this.state.editName,
                        id:this.state.editId,
                        category:this.state.editCategory,
                        price:this.state.editPrice,
                        img:this.state.editImage
                    })}>Edit Product</button>
                </div>
                {data && data.map((item, index) =>
                    <div key={index} >
                        <SingleItem data={item} addToCart={this.props.addToCart} />
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    data: state.productData
})

const mapDispatchToProps = dispatch=>({
    addToCart : payload=>dispatch(addToCart(payload)),
    addNewProduct : payload => dispatch(addNewProduct(payload)),
    editProduct : payload=> dispatch(editProduct(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);