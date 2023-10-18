import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import MobileRouters from './route/MobileRoute'
import Routers from './route/MainRoute'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    isMobile ? <MobileRouters /> : <Routers />
  )
}

export default App
