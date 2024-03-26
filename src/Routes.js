import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Programmation from './components/Programmation'
import Informations from './components/Informations'
import Billetterie from './components/Billetterie'
import Carte from './components/Carte'


function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/programmation" element={<Programmation />} />
        <Route path="/billetterie" element={<Billetterie />} />
        <Route path="/carte" element={<Carte />} />

      </Routes>
    </div>
  )
}

export default AppRoutes