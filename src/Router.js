import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './components/Menu';
import ImageSelector from './components/Image-selector';

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
                        <ImageSelector text="Bebés"/>
                    </Route>
                    <Route exact path="/ninx">
                        <ImageSelector text="Niño/a"/>
                    </Route>
                    <Route exact path="/mujer-hombre">
                        <ImageSelector text="Mujer/Hombre"/>
                    </Route>
                    <Route exact path="/parejas">
                        <ImageSelector text="Parejas"/>
                    </Route>
                    <Route exact path="/familia">
                        <ImageSelector text="Familia"/>
                    </Route>
                </Switch>   
            </div>
        </Router>
    )
}