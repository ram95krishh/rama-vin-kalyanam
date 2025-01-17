import React from 'react'

const Menu = (props) => {
  return (
    <div className='section-center'>
      {props.items.map((item) => {
        const { id, title, img, desc, allergens } = item
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='allergens'> {allergens?.join(', ')}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
