import React, { Component } from 'react';
import { connect } from "react-redux";
import SingleItem from "../Components/SingleItem";
import {getData} from "../Redux/action";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { data } = this.props
        console.log(data)

        return (
            <>
                {data && data.map((item, index) =>
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