import React from 'react';
import '../css/main.css';

export const ActBtns = ({getData , processData , remData , remallData}) => {
    const onTrigger = (event) => {
        getData(event.target.value);
        event.preventDefault();
    }

    const onProcessTrigger = (event) => {
      processData();
      event.preventDefault();
    }

    const onClearTrigger = (event) => {
      remData();
      event.preventDefault();
    }

    const onClearAllTrigger = (event) => {
      remallData();
      event.preventDefault();
    }

  return (
    <div className='container flex flex-row flex-wrap p-6 max-w-xl mx-auto justify-center space-x-0'>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={1}>1</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={2}>2</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={3}>3</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={4}>4</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={5}>5</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={6}>6</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={7}>7</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={8}>8</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={9}>9</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={0}>0</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={'+'}>+</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={'-'}>-</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={'/'}>/</button>
        <button onClick={(e) => onTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={'*'}>*</button>
        <button onClick={(e) => onClearTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={'C'}>C</button>
        <button onClick={(e) => onClearAllTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={'CE'}>CE</button>
        <button onClick={(e) => onProcessTrigger(e)} className='w-[11rem] p-2 bg-slate-400 hover:bg-slate-500' value={'='}>=</button>
    </div>
  )
}
