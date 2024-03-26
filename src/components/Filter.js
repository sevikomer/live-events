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

function FilterSelect({ label, id, divClassName, onChange, options }) {
  return (
    <div className={divClassName}>
      <label htmlFor={id} className='lg:text-white md:text-brown'>{label} </label>
      <select name={id} id={id} onChange={onChange}>
        {options.map((option) => (
          <option key={option.label} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}


function Filter({ selectedCategories, resetSelectedCategories, setSelectedCategories, setMinPrice, setMaxPrice, setMinNote, setMaxNote }) {

  const [isCategoryOpen, setIsCategoryOpen] = useState(true)
  const [isPriceOpen, setIsPriceOpen] = useState(true)
  const [isNoteOpen, setIsNoteOpen] = useState(true)

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
              id="whiteChocolate"
              name="whiteChocolate"
              value="blanc"
              label="Chocolat blanc"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="milkChocolate"
              name="milkChocolate"
              value="lait"
              label="Chocolat au lait"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="blackChocolate"
              name="blackChocolate"
              value="noir"
              label="Chocolat noir"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="nut"
              name="nut"
              value="noix"
              label="Noix/Noisette"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="fruit"
              name="fruit"
              value="fruit"
              label="Fruit"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="caramel"
              name="caramel"
              value="caramel"
              label="Caramel"
              onChange={e => setSelectedCategories(e.target.value)}
            />
            <FilterInput
              id="liquor"
              name="liquor"
              value="liqueur"
              label="Liqueur"
              onChange={e => setSelectedCategories(e.target.value)}
            />
          </form>
        </div>
      </section>
      <div className='pt-4'>
        <h2 className='text-yellow pb-2 underline font-semibold'>
          Prix
          <button onClick={() => setIsPriceOpen((prev) => !prev)}>
            +
          </button>
        </h2>
        <FilterSelect
          divClassName={isPriceOpen ? "showFilter" : "hideFilter"}
          label="Prix min"
          id="minPrice"
          options={[
            { label: "1€", value: "1" },
            { label: "5€", value: "5" },
            { label: "10€", value: "10" },
            { label: "15€", value: "15" },
            { label: "20€", value: "20" },
          ]}
          onChange={e => setMinPrice(e.target.value)}
        />
        <FilterSelect
          divClassName={isPriceOpen ? "showFilter" : "hideFilter"}
          label="Prix max"
          id="maxPrice"
          options={[
            { label: "20€", value: "20" },
            { label: "15€", value: "15" },
            { label: "10€", value: "10" },
            { label: "5€", value: "5" },
            { label: "1€", value: "1" },
          ]}
          onChange={e => setMaxPrice(e.target.value)}
        />
      </div>
      <div className='pt-4'>
        <h2 className='text-yellow pb-2 underline font-semibold'>Note
          <button onClick={() => setIsNoteOpen((prev) => !prev)}>
            +
          </button>
        </h2>
        <FilterSelect
          divClassName={isNoteOpen ? "showFilter" : "hideFilter"}
          label="Note min"
          id="minNote"
          options={[
            { label: "0", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
          ]}
          onChange={e => setMinNote(e.target.value)}
        />
        <FilterSelect
          divClassName={isNoteOpen ? "showFilter" : "hideFilter"}
          label="Note max"
          id="maxNote"
          options={[
            { label: "5", value: "5" },
            { label: "4", value: "4" },
            { label: "3", value: "3" },
            { label: "2", value: "2" },
            { label: "1", value: "1" },
            { label: "0", value: "0" },
          ]}
          onChange={e => setMaxNote(e.target.value)}
        />
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
    </fieldset>
  )
}

export default Filter