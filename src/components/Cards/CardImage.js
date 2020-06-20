import React from 'react';
import { useHistory } from 'react-router-dom';

function CardImage(props) {
    const history = useHistory();

    return (
        <div className="Image">
            <img src={props.src} alt={props.alt} />
            <button onClick={ () => history.push(props.path) }>
            {props.buttonLabel}</button>
        </div>
    );
}
export default CardImage;