import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Loggin from "./components/Loggin"
import Cart from './components/Cart'
// import {CardProduct} from './components/CardProduct'

import Client from './components/Client'
import OtherClient from './components/OtherClient'
import HomeScreen from './components/HomeScreen'


export const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path={'/'} exact component={Loggin} />
                <Route path={'/home'} exact component={HomeScreen} />
                <Route path={'/client'} exact component={Client}/>
                <Route path={'/cart'} exact component={Cart} />
                <Route path={'/otherclient'} exact component={OtherClient}/>
            </Switch>
        </Router>
    )
}
