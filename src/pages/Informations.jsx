import React from 'react';

const Informations = () => {



    return (
        <>
            <div className='text-orange p-8 bg-black'>
                <h1 className='lg:text-6xl md:text-4xl sm:text-2xl font-extrabold text-center pt-2 uppercase '>informations</h1>
            </div>
            <div className='text-white bg-black py-10' >
                <div>
                    <h1 className='lg:text-4xl text-2xl font-bold text-center pt-2 uppercase'>les chiffres</h1>
                    <div className='flex justify-center'>
                        <img src={'/images/equalizer.png'} alt='equalizer' className='w-10' />
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-start pt-10 pb-20 px-40'>
                    <div className='py-4'>
                        <p className='text-4xl pb-6'>27</p>
                        <img src={'/images/seprator.png'} alt='seprator' className='w-10' />
                        <p className='uppercase text-xl font-bold'>amazing light</p>
                        <p className='uppercase font-bold text-orange'>show</p>
                    </div>
                    <div className='py-4'>
                        <p className='text-4xl pb-6'>54</p>
                        <img src={'/images/seprator.png'} alt='seprator' className='w-10' />
                        <p className='uppercase text-xl font-bold'>popular</p>
                        <p className='uppercase font-bold text-orange'>djs</p>
                    </div>
                    <div className='py-4'>
                        <p className='text-4xl pb-6'>8</p>
                        <img src={'/images/seprator.png'} alt='seprator' className='w-10' />
                        <p className='uppercase text-xl font-bold'>live</p>
                        <p className='uppercase font-bold text-orange'>scènes</p>
                    </div>
                    <div className='py-4'>
                        <p className='text-4xl pb-6'>32</p>
                        <img src={'/images/seprator.png'} alt='seprator' className='w-10' />
                        <p className='uppercase text-xl font-bold'>live</p>
                        <p className='uppercase font-bold text-orange'>performances</p>
                    </div>
                </div>
                <div>
                    <h1 className='lg:text-4xl text-2xl font-bold text-center pt-2 uppercase'>les artistes</h1>
                    <div className='flex justify-center'>
                        <img src={'/images/equalizer.png'} alt='equalizer' className='w-10' />
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-20 pt-10 pb-20'>
                    <img src={'/images/team1.jpg'} alt='team1' className='p-2 w-72' />
                    <img src={'/images/team2.jpg'} alt='team2' className='p-2 w-72' />
                    <img src={'/images/team3.jpg'} alt='team3' className='p-2 w-72' />
                    <img src={'/images/team4.jpg'} alt='team4' className='p-2 w-72' />
                </div>
                <div>
                    <h1 className='lg:text-4xl text-2xl font-bold text-center pt-2 uppercase'>galerie photos</h1>
                    <div className='flex justify-center'>
                        <img src={'/images/equalizer.png'} alt='equalizer' className='w-10' />
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center pt-10 pb-20 px-20'>
                    <img src={'/images/gal-1.jpg'} alt='gal-1' className='p-2 w-96' />
                    <img src={'/images/gal-2.jpg'} alt='gal-2' className='p-2 w-96' />
                    <img src={'/images/gal-3.jpg'} alt='gal-3' className='p-2 w-96' />
                    <img src={'/images/gal-9.jpg'} alt='gal-9' className='p-2 w-96' />
                    <img src={'/images/gal-8.jpg'} alt='gal-8' className='p-2 w-96' />
                    <img src={'/images/gal-6.jpg'} alt='gal-6' className='p-2 w-96' />
                    <img src={'/images/gal-4.jpg'} alt='gal-4' className='p-2 w-96' />
                    <img src={'/images/gal-5.jpg'} alt='gal-5' className='p-2 w-96' />
                    <img src={'/images/gal-7.jpg'} alt='gal-7' className='p-2 w-96' />
                </div>
                <div className='py-10'>
                    <h1 className='lg:text-4xl text-2xl font-bold text-center pt-2 uppercase'>témoignages</h1>
                    <div className='flex justify-center'>
                        <img src={'/images/equalizer.png'} alt='equalizer' className='w-10' />
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-10 px-20'>
                        <div>
                            <img src={'/images/quote.png'} alt='quote' className='w-6' />
                            <div className='italic px-10'>
                                Maecenas lorem augue, dictum vitae commodo vel, gravida tempor tellus. Duis semper iaculis commodo. Pellentesque auctor, velit non dapibus hendrerit, nisi ipsum consectetur diam, vel ultricies eros libero nec mi. Morbi commodo, sapien ut eleifend commodo, mauris eros mattis massa, Nulla facilisi. Ut odio tortor, auctor at pellentesque eu, consequat non lectus.
                            </div>
                            <div className='flex py-6 px-10'>
                                <img src={'/images/team1.jpg'} alt='team1' className='w-10' />
                                <div className='p-2'>
                                    <p className='uppercase text-xl font-bold'>jennifer aster</p>
                                    <p className='text-orange'>DJ</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={'/images/quote.png'} alt='quote' className='w-6' />
                            <div className='italic px-10'>
                                Maecenas lorem augue, dictum vitae commodo vel, gravida tempor tellus. Duis semper iaculis commodo. Pellentesque auctor, velit non dapibus hendrerit, nisi ipsum consectetur diam, vel ultricies eros libero nec mi. Morbi commodo, sapien ut eleifend commodo, mauris eros mattis massa, Nulla facilisi. Ut odio tortor, auctor at pellentesque eu, consequat non lectus.
                            </div>
                            <div className='flex py-6 px-10'>
                                <img src={'/images/team2.jpg'} alt='team2' className='w-10' />
                                <div className='p-2'>
                                    <p className='uppercase text-xl font-bold'>allan patrick</p>
                                    <p className='text-orange'>Musicien</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Informations