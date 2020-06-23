import React from 'react';
import DndWrapper from '../../components/DND-Wrapper';
import Image1 from './parejas1.jpg';
import Image2 from './parejas2.jpg';
import Image3 from './parejas3.jpg';
import Image4 from './parejas4.jpg';
// import Image5 from './parejas5.jpg';

const items = [
    {
        name: 'Árabes',
        size: '0-2 meses',
        price: '$20 mil',
        state: 'Disponible',
        image: Image1
    },
    {
        name: 'Piratas',
        size: '2-4 meses',
        price: '$25 mil',
        state: 'Disponible',
        image: Image2
    },
    {
        name: 'Caperucita & Lobo',
        size: '8-10 meses',
        price: '$30 mil',
        state: 'Disponible',
        image: Image3
    },
    {
        name: 'Mario & Peach',
        size: '10-1 año',
        price: '$30 mil',
        state: 'Disponible',
        image: Image4
    },
    // {
    //     name: 'Pitufo',
    //     size: '10-1 año',
    //     price: '$28 mil',
    //     state: 'Disponible',
    //     image: Image5
    // },   
]

export default function Couples(){
    return(
        <DndWrapper items={items}/>
    );
}