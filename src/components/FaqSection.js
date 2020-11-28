import styled from 'styled-components'
import {StyledAbout} from '../styles'

const FaqSection = () => {
    return(
        <Faq>
            <h2>
                Any questions? <span>FAQ</span>
            </h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe pariatur voluptas hic asperiores quidem quaerat numquam aliquam in commodi optio reprehenderit, nemo debitis eligendi, quibusdam sunt similique accusantium, dicta aspernatur.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe pariatur voluptas hic asperiores quidem quaerat numquam aliquam in commodi optio reprehenderit, nemo debitis eligendi, quibusdam sunt similique accusantium, dicta aspernatur.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe pariatur voluptas hic asperiores quidem quaerat numquam aliquam in commodi optio reprehenderit, nemo debitis eligendi, quibusdam sunt similique accusantium, dicta aspernatur.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Products offered?</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe pariatur voluptas hic asperiores quidem quaerat numquam aliquam in commodi optio reprehenderit, nemo debitis eligendi, quibusdam sunt similique accusantium, dicta aspernatur.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>

    )
}

const Faq = styled(StyledAbout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;