import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import Loggin from './components/Loggin';

export const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path={'/'} exact component={Loggin} />
            </Switch>
        </Router>
    )
}

