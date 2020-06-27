import React from 'react';
import DndWrapper from '../../components/DND-Wrapper';
import Image1 from './ninx1.jpg';
import Image2 from './ninx2.jpg';
import Image3 from './ninx3.jpg';
import Image4 from './ninx4.jpg';
import Image5 from './ninx5.jpg';
import Image6 from './ninx6.jpg';
import Image7 from './ninx7.jpg';
import Image8 from './ninx8.jpg';
import Image9 from './ninx9.jpg';
import Image10 from './ninx10.jpg';
import DropdownsBb from './button';

const items = [
    {
        name: 'Superman',
        size: 'Talla 6-8',
        price: '$25 mil',
        state: 'Disponible',
        image: Image1
    },
    {
        name: 'Capitana América',
        size: 'Talla 8-10',
        price: '$25 mil',
        state: 'Disponible',
        image: Image2
    },
    {
        name: 'Flash',
        size: 'Talla 8-10',
        price: '$28 mil',
        state: 'Disponible',
        image: Image3
    },
    {
        name: 'Campanita',
        size: 'Talla 8-10',
        price: '$30 mil',
        state: 'Disponible',
        image: Image4
    },
    {
        name: 'Ben 10',
        size: 'Talla 10-12',
        price: '$28 mil',
        state: 'Disponible',
        image: Image5
    },
    {
        name: 'Árabe',
        size: 'Talla 12-14',
        price: '$28 mil',
        state: 'Disponible',
        image: Image6
    },
    {
        name: 'Optimus Prime',
        size: 'Talla 8-10',
        price: '$28 mil',
        state: 'Disponible',
        image: Image7
    },
    {
        name: 'Princesa',
        size: 'Talla 8-10',
        price: '$28 mil',
        state: 'Disponible',
        image: Image8
    },
    {
        name: 'Guerrero Lannister',
        size: 'Talla 6-8',
        price: '$28 mil',
        state: 'Disponible',
        image: Image9
    },
    {
        name: 'Pirata',
        size: 'Talla 10-12',
        price: '$32 mil',
        state: 'Disponible',
        image: Image10
    },               
]

export default function Kids(){
    return(
        <div>
            <DropdownsBb />
            <DndWrapper items={items}/>
        </div>
        
    );
}