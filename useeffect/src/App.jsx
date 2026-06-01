import { useEffect, useState } from 'react'
import './App.css'

function App() {

  //useState
  const [count,setCount] = useState(0)
  const [value,setValue] = useState(0)

  //useEffect

  //called multiple times while rendering and also when calling any state
  // useEffect(()=>{
  //   console.log('hi')
  // })

  //called only once while rendering
  // useEffect(()=>{
  //   console.log('welcome')
  // },[])

  //called while rendering and also while calling the state
  useEffect(()=>{
    console.log('hello')

    return(()=>{
      console.log('clear')  //first clears and then updates. it is done to avoid memory leakage
    })

  },[count,value]) //state is given


  
  return (
    <>
      <p>count:{count}</p>
      <p>value:{value}</p>
      <button onClick={()=>setCount(prev => prev+1)}>count</button>
      <button onClick={()=>setValue(prev => prev +1)}>value</button>
    </>
  )
}

export default App
