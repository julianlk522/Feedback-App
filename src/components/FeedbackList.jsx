import React from 'react'
import Feedbackitem from './Feedbackitem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
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


FeedbackList.propTypes = {
    feedback: PropTypes.array
}


export default FeedbackList