import React from 'react'

function Reseaux() {
    return (
        <>
            <div className='text-orange p-8 bg-black'>
                <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase '>réseaux sociaux</h1>
            </div>
            <div className='text-white bg-black px-4'>
                <ul className='pt-4 flex justify-between lg:justify-center'>
                    <li className='lg:p-4'>
                        <a href='http://facebook.fr' target="_blank" rel='noreferrer'>
                            <img src={'/images/facebook.svg'} alt='facebookLogo' className='p-2 w-10 hover:w-14 lg:w-20 lg:hover:w-24 bg-white rounded-xl' />
                        </a>
                        <h3 className='text-center'>Facebook</h3>
                    </li>
                    <li className='lg:p-4'>
                        <a href='http://instagram.fr' target="_blank" rel='noreferrer'><img src={'/images/instagram.svg'} alt='instagramLogo' className='p-2 w-10 hover:w-14 lg:w-20 lg:hover:w-24 bg-white rounded-xl' /></a>
                        <h3 className='text-center'>Instagram</h3>
                    </li>
                    <li className='lg:p-4'>
                        <a href='http://twitter.fr' target="_blank" rel='noreferrer'><img src={'/images/twitter.svg'} alt='twitterLogo' className='p-2 w-10 hover:w-14 lg:w-20 lg:hover:w-24 bg-white rounded-xl' /></a>
                        <h3 className='text-center'>Twitter</h3>
                    </li>
                    <li className='lg:p-4'>
                        <a href='http://youtube.fr' target="_blank" rel='noreferrer'><img src={'/images/youtube.svg'} alt='youtubeLogo' className='p-2 w-10 hover:w-14 lg:w-20 lg:hover:w-24 bg-white rounded-xl' /></a>
                        <h3 className='text-center'>Youtube</h3>
                    </li>
                    <li className='lg:p-4'>
                        <a href='http://snapchat.fr' target="_blank" rel='noreferrer'><img src={'/images/snapchat.svg'} alt='snapchatLogo' className='p-2 w-10 hover:w-14 lg:w-20 lg:hover:w-24 bg-white rounded-xl' /></a>
                        <h3 className='text-center'>Snapchat</h3>
                    </li>
                    <li className='lg:p-4'>
                        <a href='http://linkedin.fr' target="_blank" rel='noreferrer'><img src={'/images/linkedin.svg'} alt='linkedinLogo' className='p-2 w-10 hover:w-14 lg:w-20 lg:hover:w-24 bg-white rounded-xl' /></a>
                        <h3 className='text-center'>LinkedIn</h3>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Reseaux