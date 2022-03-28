import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { nanoid } from 'nanoid'
//components
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import { FeedbackProvider } from './context/FeedbackContext'


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = nanoid()
        setFeedback([newFeedback, ...feedback])
    }
    
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element = {
                            <>
                                <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats />
                            <FeedbackList handleDelete = {deleteFeedback}/>
                            <AboutIconLink />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                        <Route path="/post" element={<Post />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;