import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (movie) => {
        if (!watchlist.find((item) => item.id === movie.id)) {
            setWatchlist([...watchlist, movie]);
        } else {
            alert("Movie is already in the watchlist!");
        }
    };

    const removeFromWatchlist = (id) => {
        setWatchlist(watchlist.filter((movie) => movie.id !== id));
    };

    return (
        <WatchlistContext.Provider
            value={{ watchlist, addToWatchlist, removeFromWatchlist }}
        >
            {children}
        </WatchlistContext.Provider>
    );
};
