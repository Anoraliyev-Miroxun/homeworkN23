import { Route, Routes } from "react-router-dom";

import { useState } from 'react'
import { MainLayout } from './layout/MainLayout'
import { Home } from "./pages/home/home";
import { KitobCard } from './components/kitob-card.jsx';
import { ProfilLayout } from "./layout/ProfilLayout.jsx";
import {Obuna} from './pages/profil/components/obuna.jsx';
import {Hisob} from './pages/profil/components/hisob.jsx';
import {Kitoblarim} from './pages/profil/components/kitoblarim.jsx';
import {Sozlamalar} from './pages/profil/components/sozlamalar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="kitob/:id" element={<KitobCard />} />
          <Route path="profil" element={<ProfilLayout />}>
            <Route index element={<Obuna />}/>
            <Route path="hisob" element={<Hisob />}/>
            <Route path="kitoblarim" element={<Kitoblarim />}/>
            <Route path="sozlamalar" element={<Sozlamalar />}/>
          </Route>
        </Route>
      </Routes >
    </>
  )
}

export default App
