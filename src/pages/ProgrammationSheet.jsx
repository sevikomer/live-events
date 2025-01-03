import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios";


function ProgrammationSheet() {

    const { idSlug } = useParams();
    const id = idSlug.split("-")[0]; 
    const navigate = useNavigate()

    const [event, setEvent] = useState({})

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getEvent = async () => {
            setIsLoading(true);
            const res = await axios
                .get(`https://${process.env.REACT_APP_WP_API_URL}/wp-json/tribe/events/v1/events/${id}`);
            setEvent(res?.data ?? {})
            navigate(`/programmation/${id}-${res?.data.slug}`, { replace: true });
            
            setIsLoading(false);
        };
        getEvent().then(() => { }).catch(() => { })
    }, [id, navigate])


    return (

        event &&
        <div className='bg-black'>
            <div className='text-orange p-8'>
                <h1 className='lg:text-6xl md:text-4xl sm:text-2xl font-extrabold text-center pt-2 uppercase '>programmation</h1>
            </div>
            {
                isLoading ? <div className="bg-black text-white text-xl font-bold text-center">CHARGEMENT EN COURS</div>
                    :
                    <div key={event.id} className='p-2'>
                        <div className=''>
                            <div className='lg:flex'>
                                <div>
                                    <img src={event.image?.url} alt='' className='w-60 h-40' />
                                </div>
                                <div className='p-4 mr-10 ml-10'>
                                    <div>
                                        <h3 className='font-bold text-4xl pb-4 text-orange'>{event.title}</h3>
                                    </div>
                                    <div className='text-white font-semibold text-xl pb-4'>{event.start_date}</div>
                                    <div className='text-white font-semibold text-xl pb-4'>{event.venue?.venue}</div>
                                </div>
                            </div>
                            <div className='text-white pb-4' dangerouslySetInnerHTML={{ __html: event.description }}></div>
                        </div>
                    </div>
            }
        </div >


    )
}

export default ProgrammationSheet