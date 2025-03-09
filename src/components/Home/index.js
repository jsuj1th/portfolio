import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray= ['U', 'J', 'I', 'T', 'H']
    const jobArray = ['S', 'O', 'F', 'T', 'W', 'A', 'R', 'E', ' ', 'E', 'N', 'G', 'I', 'N', 'E', 'E', 'R']  
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)   
    
        return () => clearTimeout(timer); // ✅ Proper cleanup function
    }, [])
    return (
        
      

        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                {/* <span className={letterClass}>I</span>  */}
                <span className={`${letterClass} _12`}>i</span>
                <br/> 
                <span className={`${letterClass} _13`}>I'</span>
                <span className={`${letterClass} _14`}>m</span>
                   <img src={LogoTitle} alt="developer" />
                   <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
                </h1>
                <h2>Machine Learning/ DevOps Engineer/ Python Expert</h2>
                <Link to="contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home