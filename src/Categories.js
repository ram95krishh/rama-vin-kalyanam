import React from 'react'
const Categories = (props) => {
  return (
    <div className='btn-container'>
      {props.categories.map((cat, index) => {
        return (
          <button
            className='filter-btn'
            type='button'
            key={index}
            onClick={() => props.filterItems(cat)}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
