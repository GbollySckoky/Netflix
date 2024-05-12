import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'

const MovieRow = ({title, fetchURL, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const  [trailerUrl, setTrailerUrl] = useState('')
    // console.log(datas)
    // useEffect is a react functiin we use to call an api or trigger an event or functions
    useEffect(() => {
      const fetchData = async () => {
        // we want to fetch the datas to be frim the api
        // request is coming from api folder it has all the endpoint for each rol & also fetch url 
        // is a props passing in each  endpoint
        // axios is also imported from aapi it has the baseurl in summary this what we are doing
        // 'https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US'
        try{
          const request = await axios.get(fetchURL)
            // console.log(request)
            setMovies(request.data.results)
        }catch(error){
          console.log(error)
        }
        
      }
      fetchData()
    },[fetchURL])

  return (
    <div className='row'>
       <h1>{title}</h1>
       <div className='row_posters'>
          {movies?.map((movie) => (
            <div  className={`row_poster ${isLargeRow && 'row_posterLarge'}`} key={movie.id}>
              <img 
              onClick={() => handleClick(movie.id)}
              src={`https://image.tmdb.org/t/p/w300/${isLargeRow 
              ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie.title} />
              {/* <p>{data.title}</p> */}
              <p>{movie?.title || movie?.name}</p>
            </div>
          ))}
       </div>
    </div>
  )
}

export default MovieRow