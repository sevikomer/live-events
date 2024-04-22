import React from 'react';
import axios from "axios";

class Programmation extends React.Component {
  state = {
    events: []
  }
  componentDidMount() {
    axios
      .get("http://localhost/live-events/wp-json/tribe/events/v1/events")
      .then((res) => {
        const events = res.data
        this.setState(events);
      });
  }

  render() {
    return (
      <>
        <div className='text-white bg-black p-8'>
          <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2'>PROGRAMMATION</h1>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-black'>
          {this.state.events.map(event => (
            <div key={event.id} className='bg-black text-white  p-20 text-center'>
              <div className='flex justify-center '>
                <img src={event.image} alt='' className='w-60 h-40' />
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
}

export default Programmation