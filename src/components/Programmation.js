import React, { useEffect, useState } from 'react';
import axios from "axios";

const Programmation = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost/live-events/wp-json/tribe/events/v1/events")
      .then((res) => {
        const data = res.data
        setEvents(data.events);
      });
  }, [])



  return (
    <>
      <div className='text-orange p-8 bg-black'>
        <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase '>programmation</h1>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-black'>
        {events?.map(event => (
          <div key={event.id} className='bg-black text-white  p-20 text-center'>
            <div className='flex justify-center '>
              <img src={event.image.url} alt='' className='w-60 h-40' />
            </div>
            <div>
              <h3 className='font-bold text-xl'>{event.title}</h3>
            </div>
            <div className='font-bold'>{event.start_date}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Programmation