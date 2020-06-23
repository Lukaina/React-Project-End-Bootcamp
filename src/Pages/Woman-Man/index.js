import React from 'react';
import DndWrapper from '../../components/DND-Wrapper';
import Image1 from './mujer-hombre1.jpg';
import Image2 from './mujer-hombre2.jpg';
import Image3 from './mujer-hombre3.jpg';
import Image4 from './mujer-hombre4.jpg';
import Image5 from './mujer-hombre5.jpg';
import Image6 from './mujer-hombre6.jpg';
import Image7 from './mujer-hombre7.jpg';
// import Image8 from './mujer-hombre8.jpg';
// import Image9 from './mujer-hombre9.jpg';
// import Image10 from './mujer-hombre10.jpg';

const items = [
    {
        name: 'Mujer Maravilla',
        size: '6-8',
        price: '$20 mil',
        state: 'Disponible',
        image: Image1
    },
    {
        name: 'Capitana América',
        size: '8-10',
        price: '$25 mil',
        state: 'Disponible',
        image: Image2
    },
    {
        name: 'Flash',
        size: '8-10',
        price: '$30 mil',
        state: 'Disponible',
        image: Image3
    },
    {
        name: 'Faraón',
        size: '8-10',
        price: '$30 mil',
        state: 'Disponible',
        image: Image4
    },
    {
        name: 'Princesa',
        size: '68 cm',
        price: '$28 mil',
        state: 'Disponible',
        image: Image5
    },
    {
        name: 'Batman',
        size: '68 cm',
        price: '$28 mil',
        state: 'Disponible',
        image: Image6
    },
    {
        name: 'Blanca Nieves',
        size: '68 cm',
        price: '$28 mil',
        state: 'Disponible',
        image: Image7
    },
    // {
    //     name: 'Princesa',
    //     size: '68 cm',
    //     price: '$28 mil',
    //     state: 'Disponible',
    //     image: Image8
    // },
    // {
    //     name: 'Guerrero Lannister',
    //     size: '68 cm',
    //     price: '$28 mil',
    //     state: 'Disponible',
    //     image: Image9
    // },
    // {
    //     name: 'Pirata',
    //     size: '68 cm',
    //     price: '$28 mil',
    //     state: 'Disponible',
    //     image: Image10
    // },               
]

export default function WomanMan(){
    return(
        <DndWrapper items={items}/>
    );
}