import React from 'react';
import {Link} from "react-router-dom";
import {addUser, logoutUser} from './Redux/User/action'
import {connect} from "react-redux";
import {_getUsers} from "./_DATA";

const buttonStyle = {

    'home-button': {
        color: 'red'
    }

};

class Header extends React.Component {


    componentDidMount() {
        _getUsers().then(users => {

            const usersId = Object.values(users);

            usersId.forEach(user => {

                this.props.addUser(user);

            })


        }).catch(err => console.log('Unable to load users', err));
    }

    logoutUser = function(){



    };

    render() {

        return (

            <div>
                <Link to={'/'}>
                    <button className="home-button" style={buttonStyle}>Home</button>
                </Link>

                <Link to={'/new'}>
                    <button>New Question</button>
                </Link>

                <Link to={'/leadboard'}>
                    <button>Leader Board</button>
                </Link>


                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.user.logged.id}</label>

                {this.props.user.logged.id ? <button onClick={this.props.logoutUser}>logut </button>: ''}


                <hr/>

            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {

    return {
        addUser: user => dispatch(addUser(user)),
        logoutUser: user => dispatch(logoutUser(user))
    };


};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const header = connect(mapStateToProps, mapDispatchToProps)(Header);


export default header;