import React, { Component } from 'react';
import Truefalse from './truefalse'
import Open from './open'
import Multi from './multi'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './homepage';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <Router>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/truefalse' component={Truefalse}/>
                    <Route path='/open' component={Open}/>
                    <Route path='/multi' component={Multi}/>
             
            
            </Switch>
            </Router>
      </div>
    );
  }
}
