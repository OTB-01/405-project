import { Link } from "react-router-dom";
const MoviesResults = ({ movies }) => {
    return (
        <div className="MoviesResults-container">
            {movies.map((movie) => {
                return (
                    <div className="movie-card" key={movie.id}>
                        <Link to={`/movie-details/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                width={250}
                                height={350}
                            />
                            <h3>{movie.title}</h3>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default MoviesResults;
