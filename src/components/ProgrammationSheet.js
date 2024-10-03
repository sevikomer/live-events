import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";


function ProgrammationSheet() {

    const { eventId } = useParams()

    const [event, setEvent] = useState({})

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getEvent = async () => {
            setIsLoading(true);
            const res = await axios
                .get(`https://live-events.ovh/wp-json/tribe/events/v1/events/${eventId}`);
            console.log("res : ", res);
            setEvent(res?.data ?? {})
            setIsLoading(false);
        };
        getEvent().then(() => { }).catch(() => { })
    }, [eventId])


    return (

        event &&
        <div className='bg-black'>
            <div className='text-orange p-8'>
                <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase '>programmation</h1>
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