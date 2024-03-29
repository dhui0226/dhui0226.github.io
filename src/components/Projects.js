import './Projects.css'
import DiscordImage from './images/discordBotScreenshot.png'
import InfamousImage from './images/powerliftingScreenshot.png'
import gsImage from './images/graceshopperScreenshot.png'
import tbaImage from './images/tbaScreenshot.png'

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
                        <img className='projectImageOne' src={DiscordImage} alt='discord'/>
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
                       <p className='projectInfo'>a bot for discord that helps you track your watchlist of crytocurrencies</p>
                        <ul className='list'>
                            <li>discord.js</li>
                            <li>Node.js</li>
                            <li>CoinGecko API</li>
                            <li>PostgreSQL</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
                <div className='projectTwo'>
                    <a href='https://github.com/Diamonds-Grace-Shopper/Grace-Shopper' target='_blank'>
                        <img className='projectImageTwo' src={gsImage} alt='project two'/>
                    </a>
                    <div className='nameContainer'>
                        <a href='https://github.com/Diamonds-Grace-Shopper/Grace-Shopper' target='_blank'>
                            <h2>Grace Shopper</h2>
                        </a>
                        <a href='https://github.com/Diamonds-Grace-Shopper/Grace-Shopper' target='_blank'>
                            <button>View Project</button>
                        </a>
                    </div>
                    <div>
                        <p className='projectInfo'>e-commerce site for meats</p>
                        <ul className='list'>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>PostgreSQL</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
                <div className='projectThree'>
                    <a href='https://github.com/dhui0226/strength_coaching_site' target='_blank'>
                        <img className='projectImageThree' src={InfamousImage} alt='project three'/>
                    </a>
                    <div className='nameContainer'>
                        <a href='https://github.com/dhui0226/strength_coaching_site' target='_blank'>
                            <h2>Online Coaching Site</h2>
                        </a>
                        <a href='https://github.com/dhui0226/strength_coaching_site' target='_blank'>
                            <button>View Project</button>
                        </a>
                    </div>
                    <div>
                        <p className='projectInfo'>website for client to display strength coaching services</p>
                        <ul className='list'>
                            <li>Gatsby js</li>
                            <li>netlify</li>
                        </ul>
                    </div>
                </div>
                <div className='projectFour'>
                    <a href='https://github.com/dhui0226/ribbit' target='_blank'>
                        <img className='projectImageFour' src={tbaImage} alt='project three'/>
                    </a>
                    <div className='nameContainer'>
                        <a href='https://github.com/dhui0226/ribbit' target='_blank'>
                            <h2>[Work in Progress]</h2>
                        </a>
                        <a href='https://github.com/dhui0226/ribbit' target='_blank'>
                            <button>View Project</button>
                        </a>
                    </div>
                    <div>
                        <p className='projectInfo'>messenger platform</p>
                        <ul className='list'>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>PostgreSQL</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects