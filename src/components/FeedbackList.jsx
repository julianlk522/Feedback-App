import React from 'react'
import { useContext } from 'react'
//components
import Feedbackitem from './Feedbackitem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ handleDelete }) {
    const {feedback} = useContext(FeedbackContext)
    
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
  
    return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <Feedbackitem 
            key={item.id} 
            item={item} 
            handleDelete={handleDelete}/>
        ))}
    </div>
    )
}

export default FeedbackList