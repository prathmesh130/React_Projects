import { useState } from 'react';
import FilmList from './components/FilmList'
import Navbar from './components/Navbar'
import FilmComponent from './components/FilmComponent';


function App() {
  const [films, setFilms] = useState([]);
  const [id, setId] = useState()
  return (
    <>
      <Navbar setFilms={setFilms} />
      <div className="comp">
        <div className='main'>
          <FilmList films={films} setId={setId} />
          <FilmComponent id={id} setId={setId} />
        </div>
      </div>
    </>
  )
}

export default App
