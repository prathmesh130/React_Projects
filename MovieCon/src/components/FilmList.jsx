import React from 'react'
import FilmPoster from './FilmPoster/FilmPoster'


export default function FilmList({ films, setId, setPage, page, setApiCAll, apicall, loading, id }) {
    const handleNav = () => {
        page >= 2 && setPage(prev => prev - 1)
    }
    return (
        <div className='box'>
            <div className="summary systum">
                <div className="entertain">
                    <div onClick={() => {
                        setApiCAll('movie')
                        setPage(1)
                    }} className={apicall === 'movie' ? 'selected' : ''}>Movie</div> |
                    <div onClick={() => {
                        setApiCAll('topR')
                        setPage(1)
                    }} className={apicall === 'topR' ? 'selected' : ''}>Top Rated 🎖️</div>
                </div>
                <div className="navigation">
                    <div className={page === 1 ? 'inactive' : ''} onClick={handleNav}>{'<'}</div>
                    <div onClick={() => setPage(1)}>{'🏠'}</div>
                    <div onClick={() => setPage(prev => prev + 1)}>{'>'}</div>
                </div>
            </div>
            {!loading ?
                films.map((film) => <FilmPoster title={film.title} image={film.poster_path} date={film.release_date} key={film.id} id={film.id} setId={setId} selectid={id} />) :
                <span className='loader'></span>
            }
        </div >
    )
}
