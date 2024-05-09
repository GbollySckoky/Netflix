import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'

const Banner = () => {
    const { datas} = useSelector((state) => state.MovieSlice)

    useEffect(() =>{
        let index = Math.floor(Math.random() * datas.length)
        console.log(index)
    
        let randomData = datas[index]
        console.log('count', randomData)
    }, [])
    // console.log(datas)
  return (
    <header className='banner'
    style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${datas?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
        <div  className='banner_content'>
            <h1>{datas?.title}</h1>
            <div className='banner_buttons'>
                <button type='button' className='banner_button'>Play</button>
                <button type='button' className='banner_button'>My List</button>
            </div>
            <p className='banner_description'>{datas?.overview}</p>
        </div>
    </header>
  )
}

export default Banner