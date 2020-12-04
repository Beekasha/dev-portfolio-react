import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

const MovieDetail = () => {
    const history = useHistory();
    console.log({history})
    return(
        <div>
            <h1>MovieDetail</h1>
        </div>
    )
};

export default MovieDetail;