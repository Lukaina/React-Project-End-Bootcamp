import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './components/Menu';
import Babies from './Pages/Babies';

export default function Routes() {
    return(
        <Router>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/bebes">
                        <Babies />
                    </Route>
                    <Route exact path="/ninx">
                        <h1>Niño/a</h1>
                    </Route>
                    <Route exact path="/mujer-hombre">
                        <h1>Mujeres-Hombre</h1>
                    </Route>
                    <Route exact path="/parejas">
                        <h1>Parejas</h1>
                    </Route>
                    <Route exact path="/familia">
                        <h1>Familia</h1>
                    </Route>
                </Switch>   
            </div>
        </Router>
    )
}