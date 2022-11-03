import React from 'react';
import { useState } from 'react';
import '../css/main.css';
import { ActBtns } from './ActBtns';
import { Navbar } from './Navbar';

let calcStack = [];
export const CalcScreen = () => {
    const [first, setfirst] = useState("");

    const getData = (clickedData) => {
        if(!isNaN(clickedData)){
            calcStack.push(parseInt(clickedData));
            setfirst(first+clickedData);
        }
        console.log(calcStack);
    }
  return (
    <div>
        <Navbar />
        <div className='container flex flex-row justify-end p-6 mx-auto mt-24 max-w-xl border border-solid border-black'>
            <h1 className='text-2xl font-bold'>{first}</h1>
        </div>
        <ActBtns getData = {getData}/>
    </div>
  )
}
