import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'
const ComD = () => {
  const js=useContext(GlobalContext)
  return (
    <>
    {/* <h2>The javascript library we are learning is {js}</h2> */}
    <h1>the name of the student is: {js.name}</h1>
    <h2>age:{js.age}</h2>
    </>
  )
}

export default ComD