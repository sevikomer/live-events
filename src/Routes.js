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



function AppRoutes(posts) {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/informations" element={<Informations posts={posts} />} />
        <Route path="/programmation" element={<Programmation posts={posts} />} />
        <Route path="/billetterie" element={<Billetterie posts={posts} />} />
        <Route path="/reseaux" element={<Reseaux posts={posts} />} />
        <Route path='/carte' element={<Carte />} />
        <Route path="/faq" element={<Faq posts={posts} />} />
        <Route path="/partenaires" element={<Partenaires posts={posts} />} />
      </Routes>
    </div>
  )
}

export default AppRoutes