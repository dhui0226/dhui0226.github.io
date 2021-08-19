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
                    <div className='poContainer'>
                        <a href='https://github.com/dhui0226/discord_bot' target='_blank'>
                            <h2>Discord Bot</h2>
                        </a>
                        <a href='https://github.com/dhui0226/discord_bot' target='_blank'>
                            <button>
                                View Project
                            </button>
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
                <div className='projectTwo'></div>
                <div className='projectThree'></div>
                <div className='projectFour'></div>
            </div>
        </div>
    )
}

export default Projects