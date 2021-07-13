import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import Loggin from './components/Loggin';
// import {CardProduct} from './components/CardProduct'
import DashboardScreen from './components/DashboardScreen';
import nav from './components/nav';
import Client from './components/Client';
import OtherClient from './components/OtherClient';


export const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path={'/'} exact component={Loggin} />
                <Route path={'/home'} exact component={nav} />
                <Route path={'/dashboard'} exact component={DashboardScreen}/>
                <Route path={'/client'} exact component={Client}/>
                <Route path={'/otherclient'} exact component={OtherClient}/>
            </Switch>
        </Router>
    )
}

