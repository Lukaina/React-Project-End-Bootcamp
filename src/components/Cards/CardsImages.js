import React from 'react';
import img1 from '../../ImagesCards/disfraz-bebe.jpg';
import img2 from '../../ImagesCards/disfraz-niño.jpg';
import img3 from '../../ImagesCards/disfraz-niña.jpg';
import img4 from '../../ImagesCards/disfraz-mujer.jpg';
import img5 from '../../ImagesCards/disfraz-parejas.jpg';
import img6 from '../../ImagesCards/disfraz-hombre.jpg';
import img7 from '../../ImagesCards/disfraz-familia.jpg';
import CardImage from './CardImage';
import './CardsImages.css';

class CardsDisfraz extends React.Component {
    render () {
        return(
            <div className="container">
                    <CardImage buttonLabel="Bebé" src={img1} alt="Imagen disfraces de bebé." path="/bebes" />
                    <CardImage buttonLabel="Niño" src={img2} alt="Imagen disfraces de niño." path="/ninx" />
                    <CardImage buttonLabel="Niña" src={img3} alt="Imagen disfraces de niña." path="/ninx" />
                    <CardImage buttonLabel="Mujer" src={img4} alt="Imagen disfraces de mujer." path="/mujer-hombre" />
                    <CardImage buttonLabel="Parejas" src={img5} alt="Imagen disfraces de parejas." path="/parejas"/>
                    <CardImage buttonLabel="Hombre" src={img6} alt="Imagen disfraces de hombre." path="/mujer-hombre"/>
                    <CardImage buttonLabel="Familia" src={img7} alt="Imagen disfraces de familia." path="familia"/>
            </div>
        );
    }
}

export default CardsDisfraz;