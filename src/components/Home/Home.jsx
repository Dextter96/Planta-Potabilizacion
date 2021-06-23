import React from "react";
import './Home.scss'

const Home = () => {
    return (
        <section className="home">
            <div className="home-game">
                <button className="home-game__button">Ir al juego</button>
            </div>
            <div className="home-book">
                <button className="home-book__button">Ir al libro</button>
            </div>
        </section>
    )
}

export default Home;