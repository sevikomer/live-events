import React, { useState } from 'react'

function FilterInput({ onChange, checked, id, value, label, name }) {
  return (
    <div className='lg:text-white md:text-brown'>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          checked={checked}
          className='accent-yellow'
        />
        {label}
      </label>
    </div>
  )
}


function Filter({ setSelectedCategories, resetSelectedCategories, selectedCategories }) {

  const [isCategoryOpen, setIsCategoryOpen] = useState(true)



  return (
    <fieldset className='mt-20 p-2 pr-20 lg:bg-orange md:bg-white'>
      <legend>FILTRE</legend>
      <section>
        <h2 className='text-yellow underline font-semibold'>
          Catégories
          <button onClick={() => setIsCategoryOpen((prev) => !prev)}>+</button>
        </h2>
        <div className={isCategoryOpen ? "showFilter" : "hideFilter"}>
          <form className='pt-2 pr-5'>
            <FilterInput
              id="all"
              name="all"
              checked={selectedCategories?.length === 0}
              label="Tous"
              onChange={() => resetSelectedCategories()}
            />
            <FilterInput
              id="buvette"
              name="buvette"
              value="buvette"
              label="buvette"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="restauration"
              name="restauration"
              value="restauration"
              label="restauration"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="scene"
              name="scene"
              value="scene"
              label="scene noir"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="shop"
              name="shop"
              value="shop"
              label="shop"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="wc"
              name="wc"
              value="wc"
              label="wc"
              onChange={e => setSelectedCategories(e.target.value)}
            />
          </form>
        </div>
      </section>
      <style>{`
      .hideFilter {
        display: none;
      }
      .showFilter {
        display: block;
        width: 100%;
      }
    `}</style>
    </fieldset>
  )
}

export default Filter