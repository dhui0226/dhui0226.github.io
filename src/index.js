import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Nav, About, Projects, Footer } from './components'
import './style.css'

const App = () => {
    return (
        <div className='homeContainer'>
            <Nav />
            <div className='infoContainer'>
                <h1>David Hui</h1>
                <h2>I make stuff</h2>
                <div>Full Stack Developer based in Chicago.</div>
            <Switch>
                <Route exact path='/'></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/projects' component={Projects}></Route>
            </Switch>
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