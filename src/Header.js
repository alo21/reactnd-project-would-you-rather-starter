import React from 'react';
import {Link} from "react-router-dom";


const buttonStyle = {

    'home-button':{
       color: 'red'
    }

};

class Header extends React.Component{

    render() {

        return(

            <div>
                <Link to={'/'}><button className="home-button" style={buttonStyle}>Home</button></Link>

                <Link to={'/new'}><button>New Question</button></Link>

                <Link to={'/leadboard'}><button>Leader Board</button></Link>

                <hr/>

            </div>
        );
    }

}

export default Header;