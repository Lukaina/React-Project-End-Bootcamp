import React from "react";

import "./styles.css";

export default function Card({ item }) {
    const { name, size, price, state, image } = item
    return (
        <div className="card">
            <div className="card__name">{name}</div>
            <div className="card__size">{size}</div>
            <div className="card__price">{price}</div>
            <div className="card__state">{state}</div>
            <div className="card__image" style={{ backgroundImage: 'url('+ image + ')' }}></div>
        </div>
    );
}