import { motion } from "framer-motion";
import './animation-home.scss';

export default function AnimationHome() {

    return(
        <motion.section className="nav"
            initial={{opacity: 0, scale: 0.5}} 
            animate={{opacity: 1, scale: 1}} 
            transition={{duration: 0.8}}
        >
            <h1>VINICIUS BOTELHO</h1>
            <h3 className="span loader">
                <span className="m">D</span>
                <span className="m">E</span>
                <span className="m">S</span>
                <span className="m">E</span>
                <span className="m">N</span>
                <span className="m">V</span>
                <span className="m">O</span>
                <span className="m">L</span>
                <span className="m">V</span>
                <span className="m">E</span>
                <span className="m">D</span>
                <span className="m">O</span>
                <span className="m">R</span>
                <span className="m">&nbsp;</span>
                <span className="m">F</span>
                <span className="m">U</span>
                <span className="m">L</span>
                <span className="m">L</span>
                <span className="m">&nbsp;</span>
                <span className="m">S</span>
                <span className="m">T</span>
                <span className="m">A</span>
                <span className="m">C</span>
                <span className="m">K</span>
            </h3>
        </motion.section>
    )
}