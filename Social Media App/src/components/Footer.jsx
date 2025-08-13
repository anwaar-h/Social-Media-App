import React, { useContext } from 'react'
import { counterContext } from '../contexts/CounterContext'

export default function Footer() {
    const { counter , setCounter} = useContext(counterContext)
  return (
    <div className='text-center bg-grey-100 p-20'>
        <h1>Footer</h1>
        <h1>{counter}</h1>
        <button className='cursor-pointer' onClick={()=> setCounter(counter + 1)}>Increment</button>
    </div>
  )
}
