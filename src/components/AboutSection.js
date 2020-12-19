import React from 'react';
import home1 from '../img-samples/home1.png'
import {StyledAbout, StyledDescription, StyledImage, Hide} from '../styles'
//Framer Motion
import { motion } from 'framer-motion'

const AboutSection = () => {

    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 2 }}
    }

    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 1, when: "afterChildren" }}
    }

    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div 
                    variants={container} 
                    initial="hidden" 
                    animate="show" 
                    className="title"
                >
                    <Hide>
                        <motion.h2 variants={titleAnim} >
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any coding projects you may have.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="random dude pic"/>
            </StyledImage>
        </StyledAbout>
    )
};


export default AboutSection;