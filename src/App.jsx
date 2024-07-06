import {useState} from "react";
import './App.css'
import CakeContainer from './assets/containers/CakeContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CakeContainer/>
  )
}

export default App
