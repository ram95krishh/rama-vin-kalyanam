import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import { menu, categories } from './data'

const EVENT_MID_TIMESTAMP = 1737311400000 // JAN_20_0000_HRS // new Date('2025-01-20T07:00:00+05:30').getTime()

function App() {
  const [allItems] = useState(menu)
  const [selectedCat, setSelectedCat] = useState(new Date().getTime() < EVENT_MID_TIMESTAMP ? 'Snacks' : 'Breakfast')
  const menuItems = allItems.filter((item) => item.category === selectedCat)

  return (
    <>
      {/* Parallax Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h3>Welcome to our wedding celebration!</h3>
          <p>Explore the delicious dishes served, the timings, what went into curating them, allergen info and a lot more...</p>
          <b>
            <a href="https://www.instagram.com/explore/tags/StuckWithRama" >
              #StuckWithRama
            </a>
            {'  '}
            <a href="https://www.instagram.com/explore/tags/RamaVinKalyanam">
              #RamaVinKalyanam
            </a>
          </b>
        </div>
        <div id="nav-buttons">
          <button
            onClick={() => {
              document.getElementById('menu section).scrollIntoView({ behavior: 'smooth' });
            }}
            className="scroll-button"
          >
            Explore Menu
          </button>
          {new Date().getTime() > EVENT_MID_TIMESTAMP ? <b><a href="https://www.youtube.com/live/lKEh58Mn_eQ?feature=shared">Live Stream</a></b>: null}
        </div>
      </div>
      {/* Menu Section */} 
      <main>
        <section id='menu-section' className='menu section'>
          <div className='title'>
            <h2>The Banana Leaf Chronicles</h2>
            <div className='underline'></div>
          </div>
          <Categories selected={selectedCat} categories={categories} setCategory={setSelectedCat}></Categories>
          <Menu items={menuItems}></Menu>
          <div id="footer"> </div>
        </section>
      </main>
    </>
  )
}

export default App
