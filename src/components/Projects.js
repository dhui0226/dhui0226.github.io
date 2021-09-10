import './Projects.css'
import Image from './images/discordLogo.svg'
import DiscordImage from './images/discordBotScreenshot.png'
import InfamousImage from './images/powerliftingScreenshot.png'

const Projects = () => {
    return (
        <div className='projectsContainer'>
            <div className='projectTitleContainer'>
                <h1>Projects</h1>
                <p>You can find the source code for my projects on my <a href='https://github.com/dhui0226' target='_blank'>Github</a></p>
            </div>
            <div className='projectList'>
                <div className='projectOne'>
                    <a href='https://github.com/dhui0226/discord_bot' target='_blank'>
                        <img className='projectImage' src={DiscordImage} alt='discord'/>
                    </a>
                    <div className='nameContainer'>
                        <a href='https://github.com/dhui0226/discord_bot' target='_blank'>
                            <h2>Discord Bot</h2>
                        </a>
                        <a href='https://github.com/dhui0226/discord_bot' target='_blank'>
                            <button>View Project</button>
                        </a>
                    </div>
                    <div>
                       <p>a bot for discord that helps you track your watchlist of crytocurrencies</p>
                        <ul className='list'>
                            <li>discord.js</li>
                            <li>node js</li>
                            <li>coingecko API</li>
                            <li>postgresql</li>
                        </ul>
                    </div>
                </div>
                <div className='projectTwo'>
                    <a href='https://github.com/dhui0226' target='_blank'>
                        <img className='projectImage' src={Image} alt='project two'/>
                    </a>
                    <div className='nameContainer'>
                        <a href='https://github.com/dhui0226' target='_blank'>
                            <h2>MealTrackr</h2>
                        </a>
                        <a href='https://github.com/dhui0226' target='_blank'>
                            <button>View Project</button>
                        </a>
                    </div>
                    <div>
                        <p>my fitness pal clone</p>
                        <ul className='list'>
                            <li>react</li>
                            <li>ruby</li>
                            <li>ruby on rails</li>
                        </ul>
                    </div>
                </div>
                <div className='projectThree'>
                    <a href='https://github.com/dhui0226' target='_blank'>
                        <img className='projectImageThree' src={InfamousImage} alt='project three'/>
                    </a>
                    <div className='nameContainer'>
                        <a href='https://github.com/dhui0226' target='_blank'>
                            <h2>Online Coaching Site</h2>
                        </a>
                        <a href='https://github.com/dhui0226' target='_blank'>
                            <button>View Project</button>
                        </a>
                    </div>
                    <div>
                        <p>website for coaching client</p>
                        <ul className='list'>
                            <li>react</li>
                            <li>ruby</li>
                            <li>ruby on rails</li>
                        </ul>
                    </div>
                </div>
                <div className='projectFour'>
                    <a href='https://github.com/dhui0226' target='_blank'>
                        <img className='projectImage' src={Image} alt='project three'/>
                    </a>
                    <div className='nameContainer'>
                        <a href='https://github.com/dhui0226' target='_blank'>
                            <h2>Social Media App</h2>
                        </a>
                        <a href='https://github.com/dhui0226' target='_blank'>
                            <button>View Project</button>
                        </a>
                    </div>
                    <div>
                        <p>interact with friends online</p>
                        <ul className='list'>
                            <li>react</li>
                            <li>ruby</li>
                            <li>ruby on rails</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects