import { SiReact, SiHtml5, SiCss3, SiJavascript, SiRuby, SiRails, SiPostgresql, SiNodeDotJs } from 'react-icons/si'
import './About.css'

const About = () => {
    return (
        <div className='aboutContainer'>
            <h1>About</h1>
            <div className='aboutDesc'>
                <p>I'm a software engineer graduate from Full Stack Academy currently seeking opportunites where I can learn and grow as a developer.</p>
                <p>My first exposure to coding came about through my hobby in fitness.</p>
                <p>There was an app called MyFitnessPal I used daily to keep track of my diet.
                Everything about it from it's clean user interface to it's ease of use intrigued me.
                I looked up how the app was made and it just introduced me to this rabbit hole of a world.</p>
                <p>After tinkering around with some small projects, I finally decided to pursue a career path in coding.
                That was when I chose to attend UIC's bootcamp powered by Full Stack Academy.</p>
                <p>Outside of coding, I enjoy lifting weights and cooking homemade food.</p>
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