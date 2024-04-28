import React from 'react'

function Partenaires() {
    return (
        <div className='text-orange bg-black p-8'>
            <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase'>partenaires</h1>
            <ul className='pt-4 flex justify-between lg:justify-center'>
                <li className='lg:p-4'>
                    <img src={'/images/client-1.png'} alt='client1' className='p-2 w-14 hover:w-16 lg:w-24 lg:hover:w-28  rounded-xl' />
                </li>
                <li className='lg:p-4'>
                    <img src={'/images/client-2.png'} alt='client2' className='p-2 w-14 hover:w-16 lg:w-24 lg:hover:w-28 rounded-xl' />
                </li>
                <li className='lg:p-4'>
                    <img src={'/images/client-3.png'} alt='client3' className='p-2 w-14 hover:w-16 lg:w-24 lg:hover:w-28 rounded-xl' />
                </li>
                <li className='lg:p-4'>
                    <img src={'/images/client-4.png'} alt='client4' className='p-2 w-14 hover:w-16 lg:w-24 lg:hover:w-28 rounded-xl' />
                </li>
                <li className='lg:p-4'>
                    <img src={'/images/client-5.png'} alt='client5' className='p-2 w-14 hover:w-16 lg:w-24 lg:hover:w-28 rounded-xl' />
                </li>
                <li className='lg:p-4'>
                    <img src={'/images/client-6.png'} alt='client6' className='p-2 w-14 hover:w-16 lg:w-24 lg:hover:w-28 rounded-xl' />
                </li>
            </ul>
        </div>
    )
}

export default Partenaires