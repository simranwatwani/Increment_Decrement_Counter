import React, { useState } from "react";
import './Count.css'

const Counter = () =>{

    const [num,setNum] = useState('1');
    const [start_num,setStartNum] = useState('1');
    const [end_num,setEndNum] = useState('1000');

    const setIntial = (event) => {
        setStartNum(event.target.value);
        
    }
    const setMax = (event) => {
        setEndNum(event.target.value);
        
    }
    const increment = () => {
        console.log(num,end_num);
       
        if (+num < +end_num)
        {
            setNum(+num+1);
        } 
        else {
            console.log("Reached Maxium Value");
        }
    }
    const decrement = () => {
        if (num > start_num)
        {
            setNum(+num-1);
        } 
        else {
            console.log("Reached Minimum Value");
        }
    }
    const reset = () => {
        setNum(start_num);
        
    }

    return(
        <>
        <div class="parent-div">
            <div>
                <h1>Increment Decrement Counter</h1>
            </div>

            <div class="user-in" id="user-in">
               Intial Value <input value={start_num} onChange={setIntial}/>
                Maximum Value <input value={end_num} onChange={setMax} />
                <button onClick={reset}>Reset</button>    
            </div>

            <div class="handle-counter" id="handleCounter">
            <button class="counter-plus btn btn-two" onClick={decrement}>-</button>
                <button class="counter-number btn btn-three">{num}</button>
                <button class="counter-minus btn btn-one" onClick={increment}>+</button>
            </div>
        </div>
        </>
    );
}

export default Counter
