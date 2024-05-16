import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import API_KEY from '../../config';
const MovieRow = ({ title, fetchURL, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(false);
    const [noTrailer, setNoTrailer] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(fetchURL);
                setMovies(request.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [fetchURL]);

    const handleClick = async (id) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&official=true`);
            const videos = response.data.results;
            if (videos.length > 0) {
                const trailerKey = videos[0].key; // Assuming the first video is the trailer
                setTrailerUrl(`https://www.youtube.com/embed/${trailerKey}`);
            } else {
                // Handle case when no trailers are available
                setNoTrailer("Couldn't fetch the movie trailer for this data");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies?.map((movie) => (
                    <div className={`row_poster ${isLargeRow && 'row_posterLarge'}`} key={movie.id}>
                        <img
                            onClick={() => handleClick(movie.id)}
                            src={`https://image.tmdb.org/t/p/w300/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.title}
                        />
                        <p>{movie?.title || movie?.name}</p>
                    </div>
                ))}
            </div>
            {trailerUrl && (
                <iframe
                    title="movie-trailer"
                    width="100%"
                    height="315"
                    src={trailerUrl}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}
            {noTrailer && <p className='noTrailer'>{noTrailer}</p>}
        </div>
    );
};

export default MovieRow;
