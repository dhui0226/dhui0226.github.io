import './Home.css'
import { Link } from 'react-router-dom'
import Image from './images/me.jpg'

const Home = () => {
    return (
        <div>
            <div className='homeContainer'>
                <div className='homeItems'>
                    <img src={Image} alt='David Hui'/>
                    <h1>David Hui</h1>
                    <h2>Software Engineer</h2>
                    <p>I'm always looking to add more to my skillset as well as improve my current skills. I'm enthusastic about learning to write cleaner, reuseable and scalable code.</p>
                    <div className='btnContainer'>
                        <Link to='/about'>
                            <button className='aboutBtn'>More About Me</button>
                        </Link>
                        <a href='mailto:dhui0226@gmail.com'>
                            <button className='contactBtn'>Contact</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home