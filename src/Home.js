import React from 'react';
import {connect} from "react-redux";

class Home extends React.Component{

    render() {
        return(
            <div>

                <p>This is the home</p>

            </div>
        )
    }

}

const home = connect()(Home);

export default home;