import React from 'react'
import { Link } from 'react-router-dom';
import Programmation from './Programmation';
import Carte from "./Carte.tsx"


function Home() {
  return (
    <>
      <div className='relative bg-black'>
        <div className='text-center opacity-50'>
          <img src={'/images/photo-accueil.jpg'} alt='accueil1' />
        </div>
        <div className='absolute z-10 top-1/3 right-1/3'>
          <p className=' text-orange italic lg:text-6xl md:text-4xl sm:text-2xl font-thin text-xl'>Vivez la Musique</p>
          <h1 className=' text-white lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-bold'>NATION SOUND</h1>
        </div>
        <Link to="/informations" className='hover:bg-orange text-white border-solid border-2
     border-white lg:p-4 lg:text-4xl md:text-2xl text-xs p-2 absolute z-10 bottom-1/3 left-1/3 rounded'>PLUS D'INFORMATIONS</Link>
      </div>
      <div className='bg-black'>
        < Programmation />
      </div>
      <div className='bg-black flex justify-center pt-2 pb-6'>
        <Link to="/billetterie" className=' hover:bg-orange text-white border-solid border-2
     border-white lg:p-4 lg:text-4xl md:text-2xl text-xs p-2 rounded'>ACCEDER A LA BILLETTERIE</Link>
      </div>

      <div className='bg-black'>
        < Carte />
      </div>
    </>
  )
}

export default Home