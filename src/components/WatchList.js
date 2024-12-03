import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext/index.jsx";
import { useWatchlist } from "../context/watchlistContext/watchlistContext";

import "./WatchList.css";

const Watchlist = () => {
    const { watchlist, removeFromWatchlist } = useWatchlist();
    const { currentUser } = useAuth();
    console.log(watchlist);
    console.log(currentUser);

    return (
        <>
            <div className="Watchlist-header">
                {currentUser.displayName
                    ? currentUser.displayName
                    : currentUser.email}
                's Watchlist
            </div>
            <div className="MoviesResults-container">
                {watchlist.length > 0 ? (
                    <>
                        {watchlist.map((movie) => (
                            <Link to={`/movie-details/${movie.id}`}>
                                <div className="movie-card" key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        width={250}
                                        height={350}
                                    />
                                    <h3>{movie.title}</h3>
                                    <button
                                        onClick={() =>
                                            removeFromWatchlist(movie.id)
                                        }
                                    >
                                        Remove from watchList
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </>
                ) : (
                    <span className="empty-watchlist">
                        <p>Your watchlist is empty.</p>
                    </span>
                )}
            </div>
        </>
    );
};

export default Watchlist;
