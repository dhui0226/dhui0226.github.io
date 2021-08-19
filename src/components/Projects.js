import './Projects.css'
import Image from './images/discordLogo.svg'

const Projects = () => {
    return (
        <div className='projectsContainer'>
            <h1>Projects</h1>
            <div className='projectList'>
                <div className='projectOne'>
                    <a href='https://github.com/dhui0226/discord_bot' target='_blank'>
                        <img src={Image} alt='discord'/>
                    </a>
                </div>
                <div className='projectTwo'></div>
                <div className='projectThree'></div>
                <div className='projectFour'></div>
            </div>
        </div>
    )
}

export default Projects