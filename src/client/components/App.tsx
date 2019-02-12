import * as React from 'react';
import '../scss/app';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Login from './auth/login';
import Register from './auth/register';

export default class App extends React.Component {
    render() {
        return(
            <Router>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path ='/login' componenet={Login} />
                    </Switch>
                </>
            </Router>
        )
    }
}