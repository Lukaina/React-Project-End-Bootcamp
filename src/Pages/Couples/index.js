import React from 'react';
import DndWrapper from '../../components/Carrito-Disfraces';
import Image1 from './parejas1.jpg';
import Image2 from './parejas2.jpg';
import Image3 from './parejas3.jpg';
import Image4 from './parejas4.jpg';
import DropdownsBb from './buttonSize';

const items = [
    {
        name: 'Árabes',
        size: 'Talla M',
        price: '$60 mil',
        state: 'Disponible',
        image: Image1
    },
    {
        name: 'Piratas',
        size: 'Talla L',
        price: '$60 mil',
        state: 'Disponible',
        image: Image2
    },
    {
        name: 'Caperucita & Lobo',
        size: 'Talla S',
        price: '$70 mil',
        state: 'Disponible',
        image: Image3
    },
    {
        name: 'Mario & Peach',
        size: 'Talla M',
        price: '$70 mil',
        state: 'Disponible',
        image: Image4
    }, 
]

export default function Couples(){
    return(
        <div>
        <DropdownsBb />
        <DndWrapper items={items}/>
        </div>
    );
}