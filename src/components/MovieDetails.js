import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

    return (
        movieDetails && (
            <div
                className="backdrop-container"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
                }}
            >
                <div
                    className="overlay"
                    style={{ backdropFilter: "blur(5px)" }}
                >
                    <div className="movie-details-container">
                        <h1>{movieDetails.title}</h1>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            width={250}
                            height={350}
                        />

                        <div className="movie-overview">
                            <h2>Overview</h2>
                            <p>{movieDetails.overview}</p>
                        </div>
                        <div className="movie-release-date">
                            <h2>Release Date:</h2>
                            <p>{movieDetails.release_date}</p>
                        </div>
                        <div className="movie-runtime">
                            <h2>Runtime:</h2>
                            <p>{movieDetails.runtime} minutes</p>
                        </div>
                        <div className="movie-genres">
                            <h2>Genres:</h2>
                            <ul>
                                {movieDetails.genres.map((genre) => {
                                    return <li key={genre.id}>{genre.name}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};
export default MovieDetails;
