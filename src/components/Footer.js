import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='bg-black flex justify-center py-10'>
        <div className='bg-orange flex p-6'>
          <div className='pr-10'>
            <p className='uppercase text-white text-xl font-bold'>évènements à venir et offres spéciales</p>
            <p className='uppercase text-black text-xl font-bold'>recevez notre newsletter</p>
          </div>
          <div>
            <button className='p-2 bg-black text-white'>S'abonner</button>
          </div>
        </div>
      </div>
      <div className='pb-1 bg-black text-white'>
        <ul className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-start px-20'>
          <li className='basis-1/3 text-left pr-20'>
            <h3 className='text-orange text-xl font-bold pt-4 pb-4 uppercase'>live events</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minima odio at veritatis asperiores hic earum ex pariatur unde placeat.</p>
          </li>
          <li className='basis-1/3 text-left'>
            <h3 className='text-orange hover:text-white text-xl font-bold pt-4 pb-2 uppercase'><Link to="/faq" className=''>infos pratiques & faq</Link></h3>
            <h3 className='text-orange hover:text-white text-xl font-bold pt-4 pb-2 uppercase'><Link to="/partenaires">partenaires</Link></h3>
            <h3 className='text-orange hover:text-white text-xl font-bold pt-4 pb-2 uppercase'><Link to="/reseaux">réseaux sociaux</Link></h3>
          </li>
          <li className='basis-1/3 text-left'>
            <h3 className='text-orange text-xl font-bold pt-4 pb-4 uppercase'>contact</h3>
            <div className='flex'>
              <img src={'/images/adresse.svg'} alt='adressLogo' className='w-5 pr-1' />
              <p> 1 rue du Festival 75000 Paris</p>
            </div>
            <div className='flex'>
              <img src={'/images/telephone.svg'} alt='phoneLogo' className='w-5 pr-1' />
              <p> 01 23 45 67 89</p>
            </div>
            <div className='flex'>
              <img src={'/images/mail.svg'} alt='mailLogo' className='w-5 pr-1' />
              <p> info@exemple.fr</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer