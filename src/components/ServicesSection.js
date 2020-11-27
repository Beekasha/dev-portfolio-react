//import icons
import clock from '../img-samples/clock.svg';
import diaphragm from '../img-samples/diaphragm.svg';
import money from '../img-samples/money.svg';
import teamwork from '../img-samples/teamwork.svg'
import home2 from '../img-samples/home2.png';
const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ippy son</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="clock icon"/>
                            <h3>Team Player</h3>
                        </div>
                        <p>Lorem ippy son</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="clock icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ippy son</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="clock icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ippy son</p>
                    </div>
                </div>
            </div>
            <img src={home2} alt="second home"/>
        </div>
    )
}

export default ServicesSection;