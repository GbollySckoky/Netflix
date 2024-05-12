import React from 'react'
import Nav from './Nav/Nav'
import Banner from './Banner/Banner'
import MovieRow from './MovieRow/MovieRow'
import request from '../api/request'
const HomeScreen = () => {
  return (
    <div>
        <Nav />
        <Banner />
        <MovieRow title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals} isLargeRow/>
        <MovieRow title="Trending Now" fetchURL={request.fetchTrending}/>
        <MovieRow title="Action Movies" fetchURL={request.fetchActionMovies} />
        <MovieRow title="Animated Series" fetchURL={request.fetchAnimatedMovies}/>
        <MovieRow title="Documentry Movies" fetchURL={request.fetchDocumentry}/>
        <MovieRow title="Top Rated" fetchURL={request.fetchTopRated}/>
        <MovieRow title="Romance Movies" fetchURL={request.fetchRomance}/>
        <MovieRow title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
    </div>
  )
}

export default HomeScreen