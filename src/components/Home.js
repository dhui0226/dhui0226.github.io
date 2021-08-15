import './Home.css'
import Image from './images/me.jpg'

const Home = () => {
    return (
        <div>
            <div className='homeContainer'>
                <img src={Image} alt='David Hui'/>
                <h1>David Hui</h1>
                <h2>I make stuff</h2>
                <div className='desc'>I'm a Software Engineer based in <b>Chicago</b>.</div>

                <div className='skillsContainer'>   
                    <h2>Skills</h2>
                </div>
            </div>
        </div>
    )
}

export default Home