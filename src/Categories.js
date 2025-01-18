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
              ref={(el) => {
                if (category === selected) {
                  el?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                }
              }}
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
      <div id="category-timing-info" key={selectedCategory.id}>
        <b className='category-timing-item'>{selectedCategory.date}</b>
        <b className='category-timing-item'>{selectedCategory.timingInfo}</b>
      </div>
    </div>
  )
}
export default Categories
