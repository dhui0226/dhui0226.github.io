import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Nav } from './components'

const App = () => {
    return (
        <div>
            <Nav />
            <h1>David Hui</h1>
            <h2>I make stuff</h2>
            <div>Full Stack Developer based in Chicago.</div>
        </div>
    )
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)