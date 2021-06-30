import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import data from './data'

const allCat = ['All', ...new Set(data.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [cat, setCat] = useState(allCat)

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(data)
      return
    }
    const newItem = data.filter((item) => item.category === category)
    setMenuItems(newItem)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={cat} filterItems={filterItems}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  )
}

export default App
