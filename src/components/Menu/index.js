import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import './index.css';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
    render () {
        return (
            <div className="container">
                <span className="logo">Alquiler de Disfraces⭐</span> 
                <nav className="menu">

                    <ul className="menu__list">
                        <li className="menu__list-item"><Link className="menu__link menu__link--active" to="/">Inicio</Link></li>
                        <li className="menu__list-item"><Link className="menu__link menu__link--active" to="/bebes">Bebés</Link></li>
                        <li className="menu__list-item"><Link className="menu__link menu__link--active" to="/ninx">Niño/a</Link></li>
                        <li className="menu__list-item"><Link className="menu__link menu__link--active" to="/mujer-hombre">Mujer/Hombre</Link></li>
                        <li className="menu__list-item"><Link className="menu__link menu__link--active" to="/parejas">Parejas</Link></li>
                        <li className="menu__list-item"><Link className="menu__link menu__link--active" to="/familia">Familia</Link></li>
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