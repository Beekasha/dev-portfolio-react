//import icons
import clock from '../img-samples/clock.svg';
import diaphragm from '../img-samples/diaphragm.svg';
import money from '../img-samples/money.svg';
import teamwork from '../img-samples/teamwork.svg'
import home2 from '../img-samples/home2.png';

//styles
import {StyledAbout, StyledDescription, StyledImage, Hide} from '../styles'
import styled from 'styled-components'

const ServicesSection = () => {
    return (
        <StyledServices>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ippy son</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="clock icon"/>
                            <h3>Team Player</h3>
                        </div>
                        <p>Lorem ippy son</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="clock icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ippy son</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="clock icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ippy son</p>
                    </Card>
                </Cards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="second home"/>
            </StyledImage>
        </StyledServices>
    )
};

//takes all styles from StyledAbout, and now we can add more.
const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }

`

export default ServicesSection;