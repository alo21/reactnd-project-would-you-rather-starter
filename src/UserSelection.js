import React from 'react';
import {connect} from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {loginUser} from "./Redux/User/action";


class UserSelection extends React.Component {

    render() {
        return (
            <div key='login'>

                <p>Sign in</p>

                <InputLabel>User</InputLabel>
                <Select
                    value={this.props.user.logged}
                    onChange={ event => this.props.loginUser(event.target.value)}>

                    {this.props.user.users.map(user => {
                        return (<MenuItem value={user} key={user.id}>{user.id}</MenuItem>)

                    })}

                </Select>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {

    return {
        loginUser: user => dispatch(loginUser(user))
    };


};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const userSelection = connect(mapStateToProps, mapDispatchToProps)(UserSelection);


export default userSelection;