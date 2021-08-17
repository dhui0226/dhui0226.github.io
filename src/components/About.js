import { SiReact, SiHtml5, SiCss3, SiJavascript, SiRuby, SiRails, SiPostgresql, SiNodeDotJs } from 'react-icons/si'
import './About.css'

const About = () => {
    return (
        <div className='aboutContainer'>
            <h1>About</h1>
            <div className='aboutDesc'>
                <p>I'm always looking to add more to my skillset as well as improve my current skills.</p>
                <p>I like powerlifting and cooking homemade food in my free time.</p>
                <p>I like to refine my technique in whatever activities that interest me.</p>

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
        </div>
    )
}

export default About