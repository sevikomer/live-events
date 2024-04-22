import React, { useState } from 'react'

function FilterInput({ onChange, checked, id, value, label, name }) {
  return (
    <div className='text-white bg-black'>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          checked={checked}
          className='accent-orange'
        />
        {label}
      </label>
    </div>
  )
}


function Filter({ resetSelectedCategories, selectedCategory, setSelectedCategory }) {

  const [isCategoryOpen, setIsCategoryOpen] = useState(true)

  return (
    <fieldset className='pt-10 p-2 pr-10 bg-black'>
      <section>
        <h2 className='text-orange underline text-2xl text-center font-extrabold'>
          CATEGORIES
          <button onClick={() => setIsCategoryOpen((prev) => !prev)}>+</button>
        </h2>
        <div className={isCategoryOpen ? "showFilter" : "hideFilter"}>
          <form className='pt-2 md:text-xl flex justify-around'>
            <FilterInput
              id="all"
              name="all"
              checked={selectedCategory?.length === 0}
              label=" Tous"
              onChange={() => resetSelectedCategories()}
            />
            <FilterInput
              id="buvette"
              name="buvette"
              value="buvette"
              label=" 🍹Buvette"
              onChange={e => setSelectedCategory(e.target.value)}
            />
            <FilterInput
              id="restauration"
              name="restauration"
              value="restauration"
              label=" 🍴 Restauration"
              onChange={e => setSelectedCategory(e.target.value)}
            />
            <FilterInput
              id="scene"
              name="scene"
              value="scene"
              label=" 🎶 Scène"
              onChange={e => setSelectedCategory(e.target.value)}
            />
            <FilterInput
              id="shop"
              name="shop"
              value="shop"
              label=" 🛒 Shop"
              onChange={e => setSelectedCategory(e.target.value)}
            />
            <FilterInput
              id="wc"
              name="wc"
              value="wc"
              label=" 🚾 WC"
              onChange={e => setSelectedCategory(e.target.value)}
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