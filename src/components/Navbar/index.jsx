import './navbar.scss';
import { motion } from "framer-motion";

import linkedIn from '../../assets/linkedin.png';
import github from '../../assets/icone-github.png';

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="wrapper">
                <motion.span 
                    initial={{opacity: 0, scale: 0.5}} 
                    animate={{opacity: 1, scale: 1}} 
                    transition={{duration: 0.5}}
                >
                    Vini Dev
                </motion.span>
                <div className="social">
                    <a href="https://github.com/viniciusBotelho625?tab=repositories" target="blank"> 
                        <img src={github} alt="logo github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/vinicius-botelho-8a9810170/" target="blank"> 
                        <img src={linkedIn} alt="logo linkedIn"/>
                    </a>
                </div>
            </div>
        </div>
    );
}