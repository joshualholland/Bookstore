import * as React from 'react';
import '../scss/app';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Login from './auth/login';
import Register from './auth/register';
import Admin from './auth/admin';
import Edit from './auth/edit';
import Books from './Books';
import Post from './auth/Post';

export default class App extends React.Component {
    render() {
        return(
            <Router>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/admin' component={Admin} />
                        <Route exact path='/edit/:id' component={Edit} />
                        <Route exact path='/books' component={Books} />
                        <Route exact path='/post' component={Post} />
                    </Switch>
                </>
            </Router>
        )
    }
};