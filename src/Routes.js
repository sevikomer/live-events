import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Programmation from './pages/Programmation.jsx'
import ProgrammationSheet from './pages/ProgrammationSheet.jsx'
import Informations from './pages/Informations.jsx'
import Billetterie from './pages/Billetterie.jsx'
import Faq from './pages/Faq.jsx'
import Reseaux from './pages/Reseaux.jsx'
import Partenaires from './pages/Partenaires.jsx'
import Carte from "./pages/Carte.tsx"


function AppRoutes() {


  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/programmation" element={<Programmation />} />
        <Route path="/programmation/:idSlug" element={<ProgrammationSheet />} />
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