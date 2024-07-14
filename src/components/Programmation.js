import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import qs from "qs";

const Programmation = () => {

  const [events, setEvents] = useState([])

  const [queryParams, setQueryParams] = useState({
    start_date: "2024-05-25",
    venue: null,
  })

  console.log("queryParams : ", queryParams);

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const queryParamsPart = qs.stringify(queryParams, { skipNulls: true });
    console.log("🚀 ~ useEffect ~ url:", queryParamsPart)

    setIsLoading(true);

    axios
      .get(`http://localhost/live-events/wp-json/tribe/events/v1/events?${queryParamsPart}`)
      .then((res) => {
        const data = res.data
        setEvents(data.events);
        setIsLoading(false);
      });
  }, [queryParams])

  const [isFilterOpen, setIsFilterOpen] = useState(true)

  function FilterSelect({ label, id, divClassName, onChange, options, value }) {
    return (
      <div className={divClassName}>
        <label htmlFor={id} className='lg:text-white md:text-brown'>{label} </label>
        <select name={id} id={id} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.label} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <>
      <div className='text-orange p-8 bg-black'>
        <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase '>programmation</h1>
      </div>

      {
        isLoading ? <div className="bg-black text-orange">CHARGEMENT EN COURS</div>
          :
          <>
            <div className='pt-4 bg-black'>
              <h2 className='text-orange underline text-2xl text-center font-extrabold uppercase'>
                filtres
                <button onClick={() => setIsFilterOpen((prev) => !prev)}>+</button>
              </h2>
              <div className='pt-2 md:text-xl flex justify-around'>
                <div className='block'>
                  <FilterSelect
                    divClassName={isFilterOpen ? "showFilter" : "hideFilter"}
                    label="Scène"
                    id="venue"
                    value={queryParams.venue}
                    options={[
                      { label: "Toutes", value: "" },
                      { label: "Scène 1", value: 195 },
                      { label: "Scène 2", value: 209 },
                      { label: "Scène 3", value: 211 },
                      { label: "Scène 4", value: 213 },
                      { label: "Scène 5", value: 215 },
                    ]}
                    // checked={queryParams.venue}
                    onChange={e => setQueryParams({
                      ...queryParams,
                      venue: e.target.value?.length > 0 ? e.target.value : undefined
                    })}
                  />
                </div>
                <div className='block'>
                  <FilterSelect
                    divClassName={isFilterOpen ? "showFilter" : "hideFilter"}
                    label="Date"
                    id="date"
                    value={queryParams.start_date}
                    options={[
                      { label: "Toutes", value: "" },
                      { label: "2024-06-07", value: "2024-06-07" },
                      { label: "2024-06-08", value: "2024-06-08" },
                      { label: "2024-06-09", value: "2024-06-09" },
                    ]}
                    // checked={selectedDate}
                    onChange={e => setQueryParams({
                      ...queryParams,
                      start_date: e.target.value?.length > 0 ? e.target.value : undefined
                    })}
                  />
                </div>

              </div>
              <style>{`
        .hideFilter {
          display: none;
        }
        .showFilter {
          display: block;
          width: 100%;
        }
      `}</style>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-black'>
              {events?.map(event => (
                <div key={event.id} className='bg-black text-white  p-20 text-center'>
                  <Link to={`/programmation/${event.id}`}>
                    <div className='flex justify-center '>
                      <img src={event.image?.url} alt='' className='w-60 h-40' />
                    </div>
                    <div>
                      <h3 className='font-bold text-xl'>{event.title}</h3>
                    </div>
                    <div className='font-bold'>{event.start_date}</div>
                    <div className='font-bold'>{event.venue.venue}</div>
                  </Link>
                </div>
              ))}
            </div>
          </>
      }

    </>

  )
}

export default Programmation