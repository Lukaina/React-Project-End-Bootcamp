import React from 'react';

function CardImage(props) {
    return (
        <div className="Image">
            <img src={props.src} alt={props.alt} />
            <button>{props.buttonLabel}</button>
        </div>
    );
}
export default CardImage;