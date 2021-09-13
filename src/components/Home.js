import './Home.css'
import Image from './images/me.jpg'

const Home = () => {
    return (
        <div>
            <div className='homeContainer'>
                <img src={Image} alt='David Hui'/>
                <h1>David Hui</h1>
                <h2>Software Engineer</h2>
                <p>I'm always looking to add more to my skillset as well as improve my current skills. I'm enthusastic about learning to write cleaner, reuseable and scalable code.</p>
            </div>
        </div>
    )
}

export default Home