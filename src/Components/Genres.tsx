import React from 'react'
import './Genres.css'
import MovieCard from './MovieCard'
import Drama from './Drama'
import Cover from './Cover'
import MenuBar from './MenuBar'


const Genres = () => {
  return (
    <div>
    <MenuBar/>
    <Cover/>
    <div className="genre">
      <div className="genreHeader">
        <div>
          <span>Comedy</span>
        </div>
        <div className="genreSeeAll">
          <span>See all</span>
        </div>
      </div>
      <div className='movieContainer'>
        <MovieCard />
        <div className="genreHeader">
        <div>
          <span>Drama</span>
        </div>
        <div className="genreSeeAll">
          <span>See all</span>
        </div>
      </div>
        <Drama/>
      </div>
    </div>
    </div>
  )
}

export default Genres
