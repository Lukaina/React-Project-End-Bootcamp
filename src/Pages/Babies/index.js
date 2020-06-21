import React from 'react';
import DndWrapper from '../../components/DND-Wrapper';
import Image1 from './bebe1.jpg';
import Image2 from './bebe2.jpg';

const items = [
    {
        name: 'Minnie Mouse',
        size: '10-12',
        price: '$20',
        state: 'disponible',
        image: Image1
    },
    {
        name: 'Perrito',
        size: '10-12',
        price: '$20',
        state: 'disponible',
        image: Image2
    },
    {
        name: 'superman',
        size: '10-12',
        price: '$20',
        state: 'disponible',
        image: Image1
    },
    {
        name: 'superman',
        size: '10-12',
        price: '$20',
        state: 'disponible',
        image: Image1
    },
    {
        name: 'superman',
        size: '10-12',
        price: '$20',
        state: 'disponible',
        image: Image1
    },   
]

export default function Babies(){
    return(
        <DndWrapper items={items}/>
    );
}