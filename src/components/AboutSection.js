import React from 'react';
import home1 from '../img-samples/home1.png'
import {StyledAbout, StyledDescription, StyledImage, Hide} from '../styles'
//Framer Motion
import { motion } from 'framer-motion'

const AboutSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <Hide>
                        <motion.h2 
                            animate={{ opacity: 1, transition:{ duration: 2 } }} 
                            initial={{ opacity: 0 }}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
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