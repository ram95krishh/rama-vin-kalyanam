import React from 'react'
const Categories = (props) => {
  const { selected } = props
  const activeCategories = props.categories
  //.filter(cat => cat.timestamp_start < new Date().getTime() && cat.timestamp_end > new Date().getTime())
  const selectedCategory = activeCategories?.find((cat) => cat.category === selected)

  if (activeCategories.length === 0) { 
    return null
  }
  return (
    <div id="categories-section">
      <div className='btn-container'>
        {activeCategories.map(({ category, id }) => {
          return (
            <button
              className={category === selected ? 'filter-btn-selected' : 'filter-btn'}
              type='button'
              key={id}
              onClick={() => props.setCategory(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
      <b id="category-desc">{selectedCategory?.desc}</b>
      <div key={selectedCategory.id}>
        <b id="category-timing-info">{selectedCategory.date}</b>
        <b id="category-timing-info">{selectedCategory.timingInfo}</b>
      </div>
    </div>
  )
}
export default Categories
