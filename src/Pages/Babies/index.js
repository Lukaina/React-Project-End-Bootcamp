import React from 'react';
import DndWrapper from '../../components/DND-Wrapper';
import Image from './nino.jpeg';

const items = [
    {
        name: 'superman',
        size: '10-12',
        price: '$20',
        state: 'disponible',
        image: Image
    },
    {
        name: 'superman',
        size: '10-12',
        price: '$20',
        state: 'disponible',
        image: Image
    },
    {
        name: 'superman',
        size: '10-12',
        price: '$20',
        state: 'disponible',
        image: Image
    }    
]

export default function Babies(){
    return(
        <DndWrapper items={items}/>
    );
}