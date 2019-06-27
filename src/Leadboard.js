import React from 'react';
import {connect} from "react-redux";
import {addUser} from "./Redux/User-actions";


class Leadboard extends React.Component{

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

const mapStateToProps = state => {};

const leadboard = connect(mapStateToProps, mapDispatchToProps)(Leadboard);


export default leadboard;