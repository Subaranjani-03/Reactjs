import React, { useState } from 'react'


const State = () => {

    /*useState: change the state (reassign)
    syntax:
    let [statevariable, setStateVariable] = useState()
    */

    let [num,setNum] = useState(1) //num-variable, setNum-function used to update statevariable and trigger reload

    let [user,setUser] = useState("Hi")

    let [ischeck,setIsCheck] = useState(true)
    console.log(ischeck)

  return (
    <div>

        <input type="text" onChange={(e)=>setUser(e.target.value)} />
        


        <button onClick={()=>setNum(num+2)}>Number</button>
        <button onClick={()=>setUser('Suba')}>Name</button>
        <button onClick={()=>setIsCheck(!ischeck)}>Check</button>
        

        <h3>{num} {user}</h3>
      
    </div>
  )
}

export default State
