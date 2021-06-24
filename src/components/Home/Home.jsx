import React from 'react';
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className='home_game animation_button'>
                <button className='home_game_button'>game</button>
            </div>

            <div className='home_book animation_button'>
                <button className='home_book_button'>book</button>
            </div>

        </div>
    )
}

export default Home