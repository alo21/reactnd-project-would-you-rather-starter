import React from 'react';
import {connect} from "react-redux";
import {addUser} from "../Redux/User/action";


class Index extends React.Component{

    componentDidMount() {

        this.props.addUser('franco');
    }

    render() {

        return(

            <div>

                <p>This is the leadboard</p>

            </div>

        )}
}

const mapDispatchToProps = dispatch =>{

    return {
        addUser: user => dispatch(addUser(user))
    };


};

const mapStateToProps = state => {
    return{};
};

const leadboard = connect(mapStateToProps, mapDispatchToProps)(Index);


export default leadboard;