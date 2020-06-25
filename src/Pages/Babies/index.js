import React from 'react';
import DndWrapper from '../../components/DND-Wrapper';
import Image1 from './bebe1.jpg';
import Image2 from './bebe2.jpg';
import Image3 from './bebe3.jpg';
import Image4 from './bebe4.jpg';
import Image5 from './bebe5.jpg';

const items = [
    {
        name: 'Minnie Mouse',
        size: '0-2 meses',
        price: '$20 mil',
        state: 'Disponible',
        image: Image1
    },
    {
        name: 'Elefante',
        size: '2-4 meses',
        price: '$25 mil',
        state: 'Disponible',
        image: Image2
    },
    {
        name: 'Vaquita',
        size: '8-10 meses',
        price: '$30 mil',
        state: 'Disponible',
        image: Image3
    },
    {
        name: 'Campanita',
        size: '10-1 año',
        price: '$30 mil',
        state: 'Disponible',
        image: Image4
    },
    {
        name: 'Pitufo',
        size: '10-1 año',
        price: '$28 mil',
        state: 'Disponible',
        image: Image5
    },   
]

export default function Babies(){
    return(
        <DndWrapper items={items}/>
    );
}
