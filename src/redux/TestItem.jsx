import React from 'react'
import { useDispatch } from 'react-redux'

const TestItem = () => {

    const dispatch=useDispatch()
    const increase =()=>(
        dispatch ({type:'ADD_TO_CART'})
    )
    const decrease =()=>(
      dispatch ({type:'REMOVE_FROM_CART'})
  )
    
  return (
    <>

    <button className='btn btn-primary ' onClick={increase}>+</button>&nbsp;&nbsp;

    <button className='btn btn-primary ' onDoubleClick={decrease}>-</button>
    </>
  )
}

export default TestItem