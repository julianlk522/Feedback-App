import React from 'react'
import { useState } from 'react'

function Feedbackitem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('Example feedback item')

  const handleClick = () => {
      setRating((prev) => {
          return prev + 1
      })
  }
  
    return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{text}</div>
        <button onClick={handleClick}>Update Rating</button>
    </div>
  )
}

export default Feedbackitem