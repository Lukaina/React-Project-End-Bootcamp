import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './components/Menu';
// import Babies from './Pages/Babies';
import Kids from './Pages/Kids';
// import WomanMan from './Pages/Woman-Man';
import Couples from './Pages/Couples';
import Family from './Pages/Family';
import { CATEGORIES } from './categories.model.js';
import DndWrapper from './components/DND-Wrapper';

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
                        <DndWrapper category={CATEGORIES.BABIES}/>
                    </Route>
                    <Route exact path="/ninx">
                        <Kids />
                    </Route>
                    <Route exact path="/mujer-hombre">
                        <DndWrapper category={CATEGORIES.WOMEN}/>
                    </Route>
                    <Route exact path="/parejas">
                        <Couples />
                    </Route>
                    <Route exact path="/familia">
                        <Family />
                    </Route>
                </Switch>   
            </div>
        </Router>
    )
}