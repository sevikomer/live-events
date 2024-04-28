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

const FILTER_OPTIONS = [
  {
    label: "🍹Buvette",
    name: "buvette",
    value: "buvette"
  },
  {
    label: " 🍴 Restauration",
    name: "restauration",
    value: "restauration"
  },
  {
    label: " 🎶 Scène",
    name: "scene",
    value: "scene"
  },
  {
    label: " 🛒 Shop",
    name: "shop",
    value: "shop"
  },
  {
    label: " 🚾 WC",
    name: "wc",
    value: "wc"
  }
]


function Filter({ resetSelectedCategories, selectedCategory, setSelectedCategory }) {

  const [isCategoryOpen, setIsCategoryOpen] = useState(true)

  return (
    <fieldset className='pt-10 p-2 pr-10 bg-black'>
      <section>
        <h2 className='text-orange underline text-2xl text-center font-extrabold uppercase'>
          catégories
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
            {
              FILTER_OPTIONS.map((option) => (
                <FilterInput
                  id={option.name}
                  name={option.name}
                  checked={selectedCategory?.includes(option.value)}
                  value={option.value}
                  label={option.label}
                  onChange={e => setSelectedCategory(e.target.value)}
                />
              ))
            }
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