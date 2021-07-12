import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import {loggin} from './components/loggin'
import nav from './components/nav';

export const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path={'/'} exact component={loggin} />
                <Route path={'/home'} exact component={nav} />
            </Switch>
        </Router>
    )
}

