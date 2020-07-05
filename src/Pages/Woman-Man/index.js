import React from 'react';
import CarritoDisfraces from '../../components/Carrito-Disfraces';
import Image1 from './mujer-hombre1.jpg';
import Image2 from './mujer-hombre2.jpg';
import Image3 from './mujer-hombre3.jpg';
import Image4 from './mujer-hombre4.jpg';
import Image5 from './mujer-hombre5.jpg';
import Image6 from './mujer-hombre6.jpg';
import Image7 from './mujer-hombre7.jpg';
import DropdownsBb from './buttonSize';

const items = [
    {
        name: 'Mujer Maravilla',
        size: 'Talla M',
        price: '$28 mil',
        state: 'Disponible',
        image: Image1
    },
    {
        name: 'Capitana América',
        size: 'Talla L',
        price: '$32 mil',
        state: 'Disponible',
        image: Image2
    },
    {
        name: 'Gatubella',
        size: 'Talla S',
        price: '$30 mil',
        state: 'Disponible',
        image: Image3
    },
    {
        name: 'Faraón',
        size: 'Talla L',
        price: '$30 mil',
        state: 'Disponible',
        image: Image4
    },
    {
        name: 'Princesa',
        size: 'Talla M',
        price: '$28 mil',
        state: 'Disponible',
        image: Image5
    },
    {
        name: 'Batman',
        size: 'Talla M',
        price: '$35 mil',
        state: 'Disponible',
        image: Image6
    },
    {
        name: 'Blanca Nieves',
        size: 'Talla M',
        price: '$35 mil',
        state: 'Disponible',
        image: Image7
    },              
]

export default function WomanMan(){
    return(
        <div className="page page-womanman">
        <section className="page__dropdowns">
            <DropdownsBb />
        </section>
        <section className="page__content">
        <CarritoDisfraces items={items}/>
        </section>
    </div>
        
        
    );
}