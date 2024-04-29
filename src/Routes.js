import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Programmation from './components/Programmation'
import Informations from './components/Informations'
import Billetterie from './components/Billetterie'
import Faq from './components/Faq'
import Reseaux from './components/Reseaux'
import Partenaires from './components/Partenaires'
import Carte from "./components/Carte.tsx"


function AppRoutes() {


  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/programmation" element={<Programmation />} />
        <Route path="/billetterie" element={<Billetterie />} />
        <Route path="/reseaux" element={<Reseaux />} />
        <Route path='/carte' element={<Carte />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/partenaires" element={<Partenaires />} />
      </Routes>
    </div>
  )
}

export default AppRoutes