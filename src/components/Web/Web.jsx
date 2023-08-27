import React, { useEffect, useState } from 'react'


export default function Web() {


  const[count , setCount] = useState(0);

  function change(){
    setCount(count+1)
  }

useEffect(()=>{
  console.log('useEffect didMount call')
  return ()=>{
    console.log('useEffect willUnmount call')
  }
},[]);

useEffect(()=>{
  if(count === 0)
  return;
  console.log('useEffect didUpdate call')
},[count]);



  return (
    <div>
      <div className="container my-5 py-5 w-100">
        <h1 className='text-center'>web</h1>
        <h2 className='text-center'>Counter : {count}</h2>
        <button onClick={change} className="btn btn-outline-dark w-100">click me</button>
      </div>
    </div>
  )
}
