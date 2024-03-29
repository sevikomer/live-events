import React from 'react'

function Reseaux() {
    return (
        <div className='text-white bg-black p-8'>
            <h1 className='text-6xl font-extrabold text-center pt-2'>RESEAUX SOCIAUX</h1>
            <ul className='pt-4 grid grid-cols-3 justify-items-center items-center'>
                <li className='pt-4'>
                    <a href='http://facebook.fr' target="_blank" rel='noreferrer'>
                        <img src={'/images/facebook.svg'} alt='facebookLogo' className='p-2 w-20 hover:w-24 bg-white rounded-xl' />
                    </a>
                </li>
                <li className='pt-4'>
                    <a href='http://instagram.fr' target="_blank" rel='noreferrer'><img src={'/images/instagram.svg'} alt='instagramLogo' className='p-2 w-20 hover:w-24 bg-white rounded-xl' /></a>
                </li>
                <li className='pt-4'>
                    <a href='http://twitter.fr' target="_blank" rel='noreferrer'><img src={'/images/twitter.svg'} alt='twitterLogo' className='p-2 w-20 hover:w-24 bg-white rounded-xl' /></a>
                </li>
                <li className='pt-4'>
                    <a href='http://youtube.fr' target="_blank" rel='noreferrer'><img src={'/images/youtube.svg'} alt='youtubeLogo' className='p-2 w-20 hover:w-24 bg-white rounded-xl' /></a>
                </li>
                <li className='pt-4'>
                    <a href='http://snapchat.fr' target="_blank" rel='noreferrer'><img src={'/images/snapchat.svg'} alt='snapchatLogo' className='p-2 w-20 hover:w-24 bg-white rounded-xl' /></a>
                </li>
                <li className='pt-4'>
                    <a href='http://linkedin.fr' target="_blank" rel='noreferrer'><img src={'/images/linkedin.svg'} alt='linkedinLogo' className='p-2 w-20 hover:w-24 bg-white rounded-xl' /></a>
                </li>
            </ul>
        </div>
    )
}

export default Reseaux