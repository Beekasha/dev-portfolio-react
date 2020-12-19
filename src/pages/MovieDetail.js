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
        setMovie(currentMovie);
    }, [movies, url]);

    return(
        <div>
            <h1>MovieDetail</h1>
        </div>
    )
};

export default MovieDetail;