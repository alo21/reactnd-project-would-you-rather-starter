import React from 'react';
import {connect} from "react-redux";
import {addUser} from "../Redux/User/action";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Index extends React.Component{

    render() {

        return(

            <div>

                <h4>Create New Question</h4>
                <hr></hr>

                <p>Complete the question:</p>


                <TextField
                    id="option1"
                    label="Would you rather..."
                    margin="normal"
                />

                <br></br>
                <br></br>

                <TextField
                    id="option2"
                    label="or"
                    margin="normal"
                />

                <br></br>
                <br></br>

                <Button variant="outlined" color="primary">
                    Submit
                </Button>

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