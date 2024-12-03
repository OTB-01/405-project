import React, { useState, useEffect } from "react";
import MoviesResults from "./MoviesResults";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);

    const getTrendingMovies = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/week?` +
                    `api_key=01ab5431d8081ddcccd7e4f75dc3905a`
            );
            const responseJSON = await response.json();
            setTrendingMovies(responseJSON.results);
            //console.log(trendingMovies);
        } catch (error) {
            console.error(error);
        }
    };
    getTrendingMovies();

    return (
        <>
            <div className="Trending-container">
                <h1>Trending Movies This Week</h1>
                {trendingMovies && <MoviesResults movies={trendingMovies} />}
            </div>
        </>
    );
};

export default Home;
