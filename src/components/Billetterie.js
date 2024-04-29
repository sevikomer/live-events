import React from 'react'

function Billetterie() {
    return (
        <>
            <div className='bg-background bg-no-repeat bg-cover bg-center '>
                <div className='text-orange p-8 py-28 backdrop-brightness-50'>
                    <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase '>billetterie</h1>
                </div>
            </div>
            <div className='text-white bg-black p-8'>
                <h2 className='uppercase text-2xl font-bold text-orange'>
                    en ligne
                </h2>
                <p>
                    Pour acheter votre billet, rendez-vous sur notre <button className='font-bold uppercase text-orange'>billetterie en ligne</button> ou par téléphone au 04 05 06 07 08. Vous pouvez également acheter vos billets sur les sites suivants : Seebillets, France Ticket et Billetmaster.
                </p>
                <h2 className='uppercase text-2xl font-bold text-orange pt-10'>
                    en magasin
                </h2>
                <p>
                    <span className='font-bold'>Réseau France Billet :</span> Fnac / Carrefour / Géant / U / Intermarché
                </p>
                <p>
                    <span className='font-bold'>Réseau Ticketnet / Ticketmaster : </span>  Cultura / Leclerc / Leclerc Culture / Auchan / Cora
                </p>
            </div>
        </>
    )
}

export default Billetterie