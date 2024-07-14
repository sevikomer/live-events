import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";


function ProgrammationSheet() {

    useEffect(() => {

    }, [])


    const { eventId } = useParams()

    const [event, setEvent] = useState({})


    useEffect(() => {
        const getEvent = async () => {
            const res = await axios
                .get(`http://localhost/live-events/wp-json/tribe/events/v1/events/${eventId}`);
            console.log("res : ", res);
            setEvent(res?.data ?? {})
        };
        getEvent().then(() => { }).catch(() => { })
    }, [eventId])

    console.log("event", event);

    return (

        event &&
        <div>
            <div key={event.id} className='p-2'>
                <div className='lg:flex'>
                    <div>
                        <img src={event.image?.url} alt='' className='w-60 h-40' />
                    </div>
                    <div className='p-4 mr-10 ml-10'>
                        <div>
                            <h3 className='font-bold text-4xl pb-4'>{event.title}</h3>
                        </div>
                        <div className='text-blue font-semibold text-xl pb-4'>{event.start_date}</div>
                        <div className='text-blue font-semibold text-xl pb-4'>{event.venue?.venue}</div>

                        <div className='pb-4' dangerouslySetInnerHTML={{ __html: event.description }}></div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default ProgrammationSheet