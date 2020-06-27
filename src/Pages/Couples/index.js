import React from 'react';
import DndWrapper from '../../components/DND-Wrapper';
import Image1 from './parejas1.jpg';
import Image2 from './parejas2.jpg';
import Image3 from './parejas3.jpg';
import Image4 from './parejas4.jpg';
// import Image5 from './parejas5.jpg';
import DropdownsBb from './button';

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
        <div>
        <DropdownsBb />
        <DndWrapper items={items}/>
        </div>
    );
}