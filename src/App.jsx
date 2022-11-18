import React from 'react'
import './App.css'

import Cover from './Components/Cover'
import Mylist from "./Components/Mylist";
import Genres from "./Components/Genres";
import Search from "./Components/Search";
import Movies from "./Components/Movies";
import Tvshow from "./Components/Tvshow";
import MovieInfo from "./Components/MovieInfo";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// import MovieCard from './Components/MovieCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Genres />} />
          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/Movies" element={<Movies />} />
          <Route exact path="/Tvshows" element={<Tvshow />} />
          <Route path="/Mylist" element={<Mylist />} />
          <Route path="/id/:id" element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
