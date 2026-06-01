import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './components/state'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <State /> */}
      <Form />
    </>
  )
}

export default App
