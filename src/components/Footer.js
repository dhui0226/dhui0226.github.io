import { Link, Switch } from 'react-router-dom'
import { default as About } from './About'
import { default as Projects } from './Projects'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='fLinks'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
            </div>

            <div className='fIcons'>
                <a href='https://github.com/dhui0226' target="_blank"><FaGithub /></a>
                <a href='https://www.linkedin.com/in/david-hui-81b783215/' target="_blank"><FaLinkedin /></a>
            </div>

            <Switch exact path='/'></Switch>
            <Switch exact path='/about' component={About}></Switch>
            <Switch exact path='/projects' component={Projects}></Switch>
        </div>
    )
}

export default Footer