import React, { Component } from 'react';
import { connect } from "react-redux";
import SingleItem from "../Components/SingleItem";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { productData } = this.props
        return (
            <>
                {productData.map((item, index) =>
                    <div key={index} >
                        <SingleItem data={item} />
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    data: state.productData
})

export default connect(
    mapStateToProps,
    null
)(Homepage);