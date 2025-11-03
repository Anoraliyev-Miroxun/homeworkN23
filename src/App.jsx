import { Route, Routes } from "react-router-dom";

import { useState } from 'react'
import { MainLayout } from './layout/MainLayout'
import { Home } from "./pages/home/home";
import {KitobCard} from './components/kitob-card.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello</h1>
      <Routes>
        <Route path="/" element={<MainLayout />}> 
          <Route index element={<Home/>}/> 
          <Route path="kitob/:id" element={<KitobCard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
