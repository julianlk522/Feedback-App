import React, {useContext, useState, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)
    
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])
    
    const handleChange = (e) => {
        select(+e.currentTarget.value)
        setSelected(+e.currentTarget.value)
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