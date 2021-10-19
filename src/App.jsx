import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Components/Login';
import User from './Components/User';
import './styles/App.css';

const App = () => {

	return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Nav/>
                <Route path='/login' component={Login}/>
                <Route path='/user' component={User}/>
            </div> 
        </BrowserRouter>
	);
}

export default App;