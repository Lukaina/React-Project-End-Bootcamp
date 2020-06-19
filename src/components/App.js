import React from 'react';
import Menu from './Menu/Menu';
import CardImages from './Cards/CardsImages';
import { CustomMap } from '../../src/components/custom-mapa/Mapa';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <Menu />
                <CardImages />
                <CustomMap />
            </div>
        );
    }
}

export default App;