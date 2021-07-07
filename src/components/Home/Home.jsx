import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Link className='home_game'>
                <p>Ir al juego</p>
            </Link>
            <Link to="/book" className='home_book'>
                <p>Ir al libro</p>
            </Link>
        </div>
    )
}

export default Home;