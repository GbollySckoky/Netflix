import React from 'react'
import MovieRow from './components/MovieRow/MovieRow'
import request from '../src/api/request'
import Banner from './components/Banner/Banner'
const App = () => {
  return (
    <div>
      <Banner />
      <MovieRow title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals} isLargeRow/>
      <MovieRow title="Trending Now" fetchURL={request.fetchTrending}/>
      <MovieRow title="Action Movies" fetchURL={request.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
      <MovieRow title="Top Rated" fetchURL={request.fetchTopRated}/>
      <MovieRow title="Romance Movies" fetchURL={request.fetchRomance}/>
      <MovieRow title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
      <MovieRow title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
       {/* <MovieRow title="Horror Movies" fetchURL={request.fetchAll}/> */}
    </div>
  )
}

export default App