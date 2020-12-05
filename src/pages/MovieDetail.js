import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

const MovieDetail = () => {
    const history = useHistory();
    console.log({history})
    // console.log(history.location.pathname.slice(6, -1))
    return(
        <div>
            <h1>MovieDetail</h1>
        </div>
    )
};

export default MovieDetail;