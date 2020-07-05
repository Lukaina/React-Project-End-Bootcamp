import React from 'react';
import CardImages from '../../components/Cards/CardsImages';
import { CustomMap } from '../../components/custom-mapa/Mapa';

class App extends React.Component {
    render () {
        return (
              <div className="page page-home">
              <section className="page__content">
                <CardImages />
                <CustomMap /> 
              </section>
          </div>
        );
    }
}

export default App;