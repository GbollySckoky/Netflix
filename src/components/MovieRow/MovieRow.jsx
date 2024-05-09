import React, { useEffect } from 'react'
import { getData, getError } from '../../features/Movie/MovieSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from '../../api/axios'
const MovieRow = ({title, fetchURL, isLargeRow}) => {
    const {datas, isLoading, error} = useSelector((state) => state.MovieSlice)
    // console.log(datas)
    const dispatch = useDispatch()
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
            dispatch(getData(request.data.results))
        }catch(error){
          
        }
        
      }
      fetchData()
    },[fetchURL])
    if(isLoading === true){
      return (
        <div>
          <p>hello</p>
        </div>
      )
    }
  return (
    <div className='row'>
       <h1>{title}</h1>
       <div className='row_posters'>
          {datas.map((data) => (
            <div  className={`row_poster ${isLargeRow && 'row_posterLarge'}`} key={data.id}>
              <img src={`https://image.tmdb.org/t/p/w300/${isLargeRow ? data.poster_path : data.backdrop_path}`} alt={data.title} />
              {/* <p>{data.title}</p> */}
            </div>
          ))}
       </div>
    </div>
  )
}

export default MovieRow