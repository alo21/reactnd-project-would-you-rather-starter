import React from 'react';
import './App.css';
import Header from './Header.js'
import {Route} from 'react-router-dom';
import Home from './Home.js';
import New from './New.js';
import Leadboard from './Leadboard.js';


class App extends React.Component{

  render() {
    return(

        <div className="App">

         <Header className="Header" />

         <Route exact path={"/"} render={()=>(<Home store={this.props.store}/>)}/>

         <Route path={"/new"} render={()=>(<New store={this.props.store}/>)}/>

         <Route path={"/leadboard"} render={()=>(<Leadboard store={this.props.store}/>)}/>


        </div>

    );
  }


}

export default App;
