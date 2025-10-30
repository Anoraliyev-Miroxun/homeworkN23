import { Route, Routes } from "react-router-dom";

import { useState } from 'react'
import { MainLayout } from './layout/MainLayout'
import { Home } from "./pages/home/home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello</h1>
      <Routes>
        <Route path="/" element={<MainLayout />}> 
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
