import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import {MovieState} from '../movieState'
import {useState, useEffect} from 'react';

const MovieDetail = () => {
    const history = useHistory();
    console.log({history})
    // console.log(history.location.pathname.slice(6, -1))
    const url = history.location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const [movie,  setMovie] = useState(null);

    //UseEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return(
        <>
            {/* only render content if movie is available */}
            {movie && (
        <Details>
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="movie main img"/>
            </HeadLine>
        </Details>
            )}
        </>
    )
};

const Details = styled.div`

`
const HeadLine = styled.div`

`
export default MovieDetail;