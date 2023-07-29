import { useEffect, useState } from 'react'
import { getFilms } from '../services/searchfilms';
export default function Navbar({ setFilms }) {

    const [value, setValue] = useState('');


    useEffect(() => {
        const getFilm = async () => {
            const data = await getFilms(value);
            setFilms(data.results);
        }
        getFilm();
    }, [value])
    return (
        <div className="nav-bar">
            <h1>MovieCon</h1>
            <div>
                <input type="text" placeholder='search' className='search' value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div>{`Found ${10} results`}</div>
        </div>
    )
}
