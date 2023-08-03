import React, { useEffect, useState } from 'react'
import { getFilmCast, getFilmID } from '../services/searchfilms'
import CastComp from './castComp';
import WatchSummary from './WatchSummary';
import WatchListComp from './WatchListComp';
export default function FilmComponent({ id }) {
    const [film, setFilm] = useState();
    const [cast, setCast] = useState();
    const [view, setView] = useState()

    const [watched, setWatched] = useState(function () {
        const storedValue = JSON.parse(localStorage.getItem("watched")) || [];
        return storedValue;
    });


    useEffect(() => {
        id && (async function () {
            const data = await getFilmID(id)
            setFilm(data)
            const casteData = await getFilmCast(id)
            setCast(casteData.cast)
            setView(true)
        })()
    }, [id])

    useEffect(
        function () {
            localStorage.setItem("watched", JSON.stringify(watched));
        },
        [watched]
    );



    const handleAdd = () => {
        const x = {
            id: film.id,
            img: film.poster_path,
            title: film.title,
            vote: film.vote_average,
            time: film.runtime
        }
        if (!watched) {
            setWatched([x]);
        }
        else {
            setWatched((watched) => [...watched, x]);
        }
        setView(false)
    }

    function handleDeleteWatched(id) {
        setWatched((watched) => watched.filter((movie) => movie.id !== id));
    }

    return (
        <div className='box'>
            {(film && view) ? <>
                <div className="content">
                    <div className='filmposter'>
                        <img src={film.poster_path
                            ? `https://image.tmdb.org/t/p/original/${film.poster_path
                            }` : 'https://th.bing.com/th/id/R.d5a84412aab1a3ddd1fe6a027ad4d7fc?rik=BL9s%2bVwzodkyqA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fLcK%2fzrE%2fLcKzrEXbi.png&ehk=UMmQGeFhT3cHjck5e%2bOrGXtdtf1VwaHnL61OdnoJmDE%3d&risl=&pid=ImgRaw&r=0'} alt={film.title} />
                    </div>
                    <div className="filmdetails">
                        <div className="title">{film.title}</div>
                        <div style={{ marginTop: '3px', color: '#986745', fontWeight: 'bold' }}>{film.tagline}</div>
                        <div className="releaseDate">
                            <span>{film.release_date} </span>
                            <span>| {film.runtime} mins</span>
                        </div>
                        <div className="genre">
                            {film.genres.map(gen => <span> {gen.name} |</span>)}
                        </div>
                        <div style={{ marginTop: '10px' }}>⭐ {film.vote_average.toFixed(1)}</div>
                    </div>
                    <div className='close' onClick={() => setView(false)}>❌</div>
                </div>
                <div className='btndv'>
                    <button className="btn-add" onClick={handleAdd}>Add to List</button>
                </div>
                <div className="filminfo">
                    {film.overview}
                </div>
                <div className="cast">
                    {cast && cast.map(c => <CastComp name={c.name} image={c.profile_path} key={c.id} />)}
                </div>
            </> :
                <div>

                    <WatchSummary watched={watched} />
                    <WatchListComp watched={watched} onDeleteWatched={handleDeleteWatched} />
                </div>


            }
        </div >
    )
}
