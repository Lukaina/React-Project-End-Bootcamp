import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import './index.css';

class Menu extends React.Component {
    render () {
        return (
            <div className="container">
                <span className="logo">Alquiler de Disfraces⭐</span> 
                <nav className="menu">

                    <ul className="menu__list">
                        <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Inicio</a></li>
                        <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Bebés</a></li>
                        <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Niño/a</a></li>
                        <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Mujer/Hombre</a></li>
                        <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Parejas</a></li>
                        <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Familia</a></li>
                    </ul>

                </nav>
                <div className="icons-contact">
                    <FontAwesomeIcon icon={faWhatsapp} /> 
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
            </div>
        );
    }
}

export default Menu;