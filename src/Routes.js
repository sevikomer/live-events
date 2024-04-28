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

  const divStyle = {
    backgroundImage: "url(background.jpg)",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/informations" element={<Informations divtyle={divStyle} />} />
        <Route path="/programmation" element={<Programmation divStyle={divStyle} />} />
        <Route path="/billetterie" element={<Billetterie divStyle={divStyle} />} />
        <Route path="/reseaux" element={<Reseaux divStyle={divStyle} />} />
        <Route path='/carte' element={<Carte divStyle={divStyle} />} />
        <Route path="/faq" element={<Faq divStyle={divStyle} />} />
        <Route path="/partenaires" element={<Partenaires divStyle={divStyle} />} />
      </Routes>
    </div>
  )
}

export default AppRoutes