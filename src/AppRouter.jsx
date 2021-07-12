import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import {loggin} from './components/loggin'

export const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path={'/'} exact component={loggin} />
            </Switch>
        </Router>
    )
}

