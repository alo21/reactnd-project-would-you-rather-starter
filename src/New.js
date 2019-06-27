import React from 'react';
import {connect} from "react-redux";
import {addUser} from "./Redux/User-actions";



class New extends React.Component{

    componentDidMount() {

        this.props.addUser('Lorenzo');
    }

    render() {

        return(

            <div>

                <p>This is the new question section</p>

            </div>

        )}
}

const mapDispatchToProps = dispatch =>{

    return {
        addUser: user => dispatch(addUser(user))
    };


};

const mapStateToProps = state => {};

const newComp = connect(mapStateToProps, mapDispatchToProps)(New);

export default newComp;