import React from 'react';
import {connect} from "react-redux";
import LeadCard from './LeadCard'
import UserSelection from "../UserSelection";


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sortedUsers: []
        };

        this.sortUsers = this.sortUsers.bind(this);

    }

    componentDidMount() {
        this.sortUsers();

    }

    sortUsers = function () {

        let sortedUsers = this.props.users.sort(function (a, b) {

            let totB = (Object.keys(b.answers).length + b.questions.length);
            let totA = (Object.keys(a.answers).length + a.questions.length);

            return (totB - totA)
        });

        this.setState({
            sortedUsers: sortedUsers
        });

    };

    render() {

        return (

            <div>

                {this.props.loggedUser.id ?

                    <div>

                        {this.state.sortedUsers.map(user => {

                            return (<LeadCard user={user} key={user.id}/>)

                        })}

                    </div>

                    :
                    <UserSelection/>

                }
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {

    return {};


};

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loggedUser: state.user.logged
    };
};

const leadboard = connect(mapStateToProps, mapDispatchToProps)(Index);


export default leadboard;