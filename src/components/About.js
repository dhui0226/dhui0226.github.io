import { SiReact, SiHtml5, SiCss3, SiJavascript, SiRuby, SiRails, SiPostgresql, SiNodeDotJs } from 'react-icons/si'
import './About.css'

const About = () => {
    return (
        <div className='aboutContainer'>
            <h1>About</h1>
            <div className='aboutDesc'>
                <p>I'm a software engineer graduate from Full Stack Academy currently seeking opportunites where I can learn and grow as a developer.</p>
                <p>I'm always looking to add more to my skillset as well as improve my current skills. I'm enthusastic about learning to write cleaner, reuseable and scalable code.</p>
                <p>I like lifting weights and cooking homemade food in my free time.</p>
            </div>
            <div className='technologiesContainer'>   
                <h2>Technologies that I use</h2>
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
    )
}

export default About