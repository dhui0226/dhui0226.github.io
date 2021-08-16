import './Home.css'
import Image from './images/me.jpg'
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiRuby, SiRails, SiPostgresql, SiNodeDotJs } from 'react-icons/si'

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
                    <div className='techContainer'>
                        <div className='techRowOne'>
                            <SiReact />
                            <SiHtml5 />
                            <SiCss3 />
                            <SiJavascript />
                        </div>
                        <div className='techRowTwo'>
                            <SiRuby />
                            <SiRails />
                            <SiPostgresql />
                            <SiNodeDotJs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home