import { Route, Switch, Link } from 'react-router-dom'
import { default as About } from './About'
import { default as Projects } from './Projects'

const Nav = () => {
    return (
        <div>
            <h1>nav bar</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>

            <Switch>
                <Route exact path='/'></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/projects' component={Projects}></Route>
            </Switch>
        </div>
    )
}

export default Nav