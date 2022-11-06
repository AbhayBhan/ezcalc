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
        if(isNaN(clickedData)){
            calcStack.push(clickedData);
            setfirst(first+clickedData);
        }
    }

    const processData = () => {
        let elements = [];
        let ops = []
        let ele = 0;
        let c;
        if(calcStack.length === 0){
            return;
        }
        for(let i=0; i<calcStack.length; ++i){
            if(typeof calcStack[i] == 'string'){
                ops.push(calcStack[i]);
                ele /= 10;
                elements.push(ele);
                ele = 0;
                continue;
            }
            ele += calcStack[i];
            ele *= 10;
            if(i === calcStack.length-1){
                ele /= 10;
                elements.push(ele);
                break;
            }
        }
        for(let i=0; i<elements.length-1; ++i){
            let a = elements[i];
            let b = elements[i+1];
            switch(ops[i]){
                case '+':
                    c = a+b;
                    elements[i+1] = c;
                    break;
                case '-':
                    c = a-b;
                    elements[i+1] = c;
                    break;
                case '/':
                    c = a/b;
                    elements[i+1] = c;
                    break;
                case '*':
                    c = a*b;
                    elements[i+1] = c;
                    break;
                default:
                    c = "ERROR"
                    break;
            }
        }
        calcStack = [];
        calcStack.push(c);
        setfirst(String(c));
    }

    const remData = () => {
        let a = first.slice(0,first.length - 1);
        let temp = calcStack.length - 1;
        if(calcStack[temp] < 10 && calcStack[temp] > -10){
            calcStack.pop();
        }
        else if(calcStack[temp] >= 10 || calcStack[temp <= -10]){
            calcStack[temp] /= 10;
            calcStack[temp] = Math.floor(calcStack[temp]);
        }
        else{
            calcStack.pop();
        }
        setfirst(a);
    }

    const remallData = () => {
        calcStack = [];
        setfirst("");
    }

  return (
    <div>
        <Navbar />
        <div className='container flex flex-row justify-end p-6 mx-auto mt-24 max-w-xl border border-solid border-black'>
            <h1 className='text-2xl font-bold'>{first}</h1>
        </div>
        <ActBtns getData = {getData} processData = {processData} remData = {remData} remallData = {remallData}/>
    </div>
  )
}
