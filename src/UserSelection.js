import React from 'react';
import {connect} from "react-redux";


class UserSelection extends React.Component{

    render() {
        return (
            <div>

                <p>Sign in</p>

                <select>

                    <option>
                        opt1
                    </option>
                    <option>
                        opt2
                    </option>
                    <option>
                        opt3
                    </option>

                </select>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {

    return {
    };


};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const userSelection = connect(mapStateToProps, mapDispatchToProps)(UserSelection);


export default userSelection;