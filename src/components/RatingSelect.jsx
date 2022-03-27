import React from 'react'

function RatingSelect({ select, selected }) {
    
    const handleChange = (e) => {
        select(+e.currentTarget.value)
    }
  
    const ratingElements = []
    
    for (let i = 1; i <= 10; i++) {
        ratingElements.push(
            <li key={i}>
                <input
                    type='radio'
                    id={`num${i}`}
                    name="rating"
                    value={i}
                    onChange={handleChange}
                    checked={selected === i}
                />
                <label htmlFor={`num${i}`}>{i}</label>    
            </li>
        )
    }
    
    return (
    <ul className='rating'>
        {ratingElements}
    </ul>
  )
}

export default RatingSelect