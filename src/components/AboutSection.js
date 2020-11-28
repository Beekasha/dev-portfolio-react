import React from 'react';
import home1 from '../img-samples/home1.png'
import {StyledAbout, StyledDescription, StyledImage, Hide} from '../styles'

const AboutSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
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