import React,{useState} from 'react'



const IncrementDecrement = () => {

  const [num,setNum]=useState(1)

  // const increamentFun=()=>{
  //   setNum(num+1)
  // }
  return (
    <>
    <h2 className='text-sucess'>{num}</h2>
    {/* <button className='btn btn-primary' onClick={increamentFun}>Increment</button> &nbsp;&nbsp;&nbsp; */}

    <button className='btn btn-primary' onClick={()=>setNum(num+1)}>Increment</button> &nbsp;&nbsp;&nbsp;

    {
      num>1 &&
      <button className='btn btn-danger'onClick={()=>setNum(num-1)}>Decrement</button>

    }

    {/* <button className='btn btn-danger'onClick={()=>setNum(num-1)}>Decrement</button> &nbsp;&nbsp;&nbsp; */}

   
    
    </>
  )
}

export default IncrementDecrement