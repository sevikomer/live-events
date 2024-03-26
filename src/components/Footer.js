import React from 'react'

function Footer() {
  return (
    <div className='lg:flex sm:block pb-1 bg-black text-white'>
      <ul className='lg:flex sm:block justify-start gap-10 p-1'>
        <li className='basis-1/3 text-left'>
          <h3 className='text-orange text-xl font-bold pt-4 pb-4'>LIVE EVENTS</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minima odio at veritatis asperiores hic earum ex pariatur unde placeat.</p>
        </li>
        <li className='basis-1/3 text-left'>
          <h3 className='text-orange text-xl font-bold pt-4 pb-2'>INFOS PRATIQUES & FAQ</h3>
          <h3 className='text-orange text-xl font-bold pt-4 pb-2'>PARTENAIRES</h3>
          <h3 className='text-orange text-xl font-bold pt-4 pb-2'>RESEAUX SOCIAUX</h3>
        </li>
        <li className='basis-1/3 text-left'>
          <h3 className='text-orange text-xl font-bold pt-4 pb-4'>CONTACT</h3>
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
  )
}

export default Footer