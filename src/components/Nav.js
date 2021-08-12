import { Route, Switch, Link } from 'react-router-dom'
import { default as About } from './About'
import { default as Projects } from './Projects'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Nav.css'

const Nav = () => {
    return (
        <div className='navContainer'>
            <div className='david'>
                <Link to='/'>David Hui</Link>
            </div> 
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
            </div> 
            <div className='icons'>
                <a href='https://github.com/dhui0226' target="_blank"><GitHubIcon /></a>
                <a href='https://www.linkedin.com/in/david-hui-81b783215/' target="_blank"><LinkedInIcon /></a>
            </div> 

            {/*<Switch>
                <Route exact path='/'></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/projects' component={Projects}></Route>
            </Switch>*/}
        </div>
    )
}

export default Nav