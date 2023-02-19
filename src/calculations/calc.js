import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'

const Calc = () => {
const [value,setValue]=useState(0)

const add=(x)=>{
    setValue((prevState)=>  prevState + 5)
}
const Subtract=(x)=>{
  
    setValue((prevState)=> prevState - 5)
}
const handleReset=()=>{
  setValue(0)
}




  return (

    <div className='Customcard'>
      <div >
      <h3 className='title'> Simple Counter App</h3>
      </div>
      <div className='frame'> 
         <p className="text"> Counter {value}</p>
        </div>
      <div>
        <button className='firstBtn btn btn-danger' onClick={handleReset}> Reset</button>
      <button className='btn btn-primary layout' onClick={add}>Increment</button>{" "}
     <button className='btn btn-warning secondBtn' onClick={Subtract}>Decrement</button>
      </div>

   </div>
  )
}
export default Calc
