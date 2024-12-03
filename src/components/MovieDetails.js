import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
const MovieDetails = () => {
    const params = useParams();
    const id = params.id;

    const [movieDetails, setMovieDetails] = useState(null);
    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?` +
                    `api_key=01ab5431d8081ddcccd7e4f75dc3905a`
            );
            const responseJSON = await response.json();
            setMovieDetails(responseJSON);
        };
        fetchMovieDetails();
    }, [id]);

    const handleAddToWatchlist = () => {
        //TODO: add movie to watchlist ==> protected route
        console.log("Add to watchlist");
    };

    return (
        movieDetails && (
            <div
                className="backdrop-container"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
                }}
            >
                <div className="backdrop-blur">
                    <div className="movie-details-container">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            width={250}
                            height={350}
                        />
                        <h1>{movieDetails.title}</h1>
                        <span>Duration: {movieDetails.runtime} minutes</span>
                        <span>
                            Rating: {movieDetails.vote_average}
                            /10
                        </span>
                        <span className="movie-buttons">
                            <button
                                className="imdb-button"
                                onClick={() =>
                                    window.open(
                                        `https://www.imdb.com/title/${movieDetails.imdb_id}`
                                    )
                                }
                            >
                                IMDB
                            </button>
                            <button
                                className="watchlist-button"
                                onClick={handleAddToWatchlist}
                            >
                                Add to watchlist
                            </button>
                        </span>
                        <div className="details">
                            <h2>Overview</h2>
                            <p>{movieDetails.overview}</p>
                            <h2>Release Date:</h2>
                            <p>{movieDetails.release_date}</p>

                            <h2>Genres:</h2>
                            <ul>
                                {movieDetails.genres.map((genre) => {
                                    return <li key={genre.id}>{genre.name}</li>;
                                })}
                            </ul>
                            <h2>Spoken Languages:</h2>
                            <ul>
                                {movieDetails.spoken_languages.map(
                                    (language) => {
                                        return (
                                            <li key={language.iso_639_1}>
                                                {language.name}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                            <h2>Production Companies:</h2>
                            <ul>
                                {movieDetails.production_companies.map(
                                    (company) => {
                                        return (
                                            <li key={company.id}>
                                                {company.name}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>

                            <h2>Production Countries:</h2>
                            <ul>
                                {movieDetails.production_countries.map(
                                    (country) => {
                                        return (
                                            <li key={country.iso_3166_1}>
                                                {country.name}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};
export default MovieDetails;
