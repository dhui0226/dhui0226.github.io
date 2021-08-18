import './Home.css'
import Image from './images/me.jpg'
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiRuby, SiRails, SiPostgresql, SiNodeDotJs } from 'react-icons/si'

const Home = () => {
    return (
        <div>
            <div className='homeContainer'>
                <img src={Image} alt='David Hui'/>
                <h1>David Hui</h1>
                <p className='desc'>I'm a Full Stack Developer based in <b>Chicago</b>.</p>
            </div>
        </div>
    )
}

export default Home