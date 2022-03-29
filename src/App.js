import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//components
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import { FeedbackProvider } from './context/FeedbackContext'


function App() {
    
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element = {
                            <>
                                <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
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