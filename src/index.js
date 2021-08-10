import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Nav, Footer } from './components'
import './style.css'

const App = () => {
    return (
        <div className='homeContainer'>
            <Nav />
            <div className='infoContainer'>
                <h1>David Hui</h1>
                <h2>I make stuff</h2>
                <div>Full Stack Developer based in Chicago.</div>
            </div>

            <Footer />
        </div>
    )
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)