import React from 'react';
import CardImages from '../../components/Cards/CardsImages';
import { CustomMap } from '../../components/custom-mapa/Mapa';

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <CardImages />
                <CustomMap /> 
            </div>
        );
    }
}

export default App;