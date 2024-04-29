import React from 'react'

function Faq() {
    return (
        <>
            <div className='bg-background bg-no-repeat bg-cover bg-center '>
                <div className='text-orange p-8 py-28 backdrop-brightness-50'>
                    <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase '>infos pratiques & faq</h1>
                </div>
            </div>
            <div className='text-white bg-black p-8'>
                <ul>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>⛺ Où dormir ?</h3>
                        <p>Retrouvez toutes les informations dans la rubrique « Transport & Logement ».</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>🚴‍♂️ Comment venir ?</h3>
                        <p>Retrouvez toutes les informations dans la rubrique « Transport & Logement ».</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>🕕 Quelles sont les horaires de passage des concerts ?</h3>
                        <p>Tous les horaires du festival sont disponibles sur l’appli officielle du festival disponible sur iPhone et Android.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>🎫 Tous les billets sont à mon nom, est-ce que je dois les modifier ?</h3>
                        <p>Pour les places achetées en billetterie, ce n’est pas nécessaire, le nom sert uniquement en cas de remboursement.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>💰 Comment payer dans l’enceinte du festival ?</h3>
                        <p>Il n’y a pas de cashless sur le festival, vous pouvez payer en espèce ou en carte de crédit.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>🎒 Puis-je venir avec mon sac à dos ?</h3>
                        <p> ⚠️🚫 Les sacs à dos et tote bags sont interdits ! Seuls les petits sacs à mains, pochettes, bananes, petits tote bags seront tolérés si ils font moins de 10 litres. Nous vous conseillons de venir le plus léger possible et d’anticiper votre arrivée sur le site de la Scène Jean-Louis Foulquier.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>Une consigne sera-t-elle mise à disposition ?</h3>
                        <p> ⚠️🚫 Non, pour des raisons de sécurité et sanitaires, il n’y aura pas de consignes.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>🥪 🥤 Puis-je apporter de la nourriture ?</h3>
                        <p>Seuls les petits en-cas, les bouteilles en plastique transparentes (50 cl) et les gourdes (vides) sont autorisés. Pour des raisons de sécurité, il vous sera demandé de retirer les bouchons de vos bouteilles à l’entrée. Les bouteilles en verre sont évidemment interdites, tout comme les aérosols et les brumisateurs.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>💧 Existe-t-il des fontaines à eau à disposition ?</h3>
                        <p>Oui, des fontaines à eau et un bar à eau sont à disposition des festivaliers sur tout le site.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>🍶 Est-ce que les gourdes sont autorisées ?</h3>
                        <p>Oui mais vides !</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>📸 Les caméras et appareils photos sont-ils autorisés ?</h3>
                        <p>🚫 Les caméras, go-pros, selfies sticks et appareils de type reflex ne sont pas autorisés dans l’enceinte du festival.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>🪑 Est-il possible d’apporter un siège ?</h3>
                        <p>🚫 Pour des raisons de sécurité, il n’est en aucun cas permis d’apporter un siège pliable.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>🐶 Les animaux sont-ils autorisés dans l’enceinte du festival ?</h3>
                        <p>🚫 Non, les animaux ne sont pas autorisés dans l’enceinte du festival.</p>
                    </li>
                    <li className='mt-8'>
                        <h3 className='text-xl font-bold'>🔍 Existe-t-il un point « Objets trouvés » ?</h3>
                        <p>Pour tout objet égaré, vous pouvez nous contacter directement au 04 05 06 07 08.</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Faq