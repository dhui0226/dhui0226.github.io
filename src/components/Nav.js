import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'
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
                <a href='https://github.com/dhui0226' target="_blank"><FaGithub /></a>
                <a href='https://www.linkedin.com/in/david-hui-81b783215/' target="_blank"><FaLinkedin /></a>
            </div> 
        </div>
    )
}

export default Nav