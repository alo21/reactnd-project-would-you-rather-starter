import React from 'react';
import {connect} from "react-redux";
import {addUser} from "../Redux/User/action";



class Index extends React.Component{

    render() {

        return(

            <div>

                <h4>Create New Question</h4>
                <hr></hr>

                <p>Complete the question:</p>


                <h4>Would you rather ...</h4>

                <input type="text" name="question1"/>

                <p>or</p>

                <input type="text" name="question2"/>

                <br></br>
                <br></br>

                <button type="button">Submit</button>

            </div>

        )}
}

const mapDispatchToProps = dispatch =>{

    return {
        addUser: user => dispatch(addUser(user))
    };


};

const mapStateToProps = state => {
    return{}
};

const newComp = connect(mapStateToProps, mapDispatchToProps)(Index);

export default newComp;