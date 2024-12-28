import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);
    const [inWatchlist, setInWatchlist] = useState(false);

    const addToWatchlist = (movie) => {
        if (!watchlist.find((item) => item.id === movie.id)) {
            setWatchlist([...watchlist, movie]);
            setInWatchlist(true);
        } else {
            alert("Movie is already in the watchlist!");
        }
    };

    const removeFromWatchlist = (id) => {
        setWatchlist(watchlist.filter((movie) => movie.id !== id));
        setInWatchlist(false);
    };

    return (
        <WatchlistContext.Provider
            value={{
                watchlist,
                inWatchlist,
                addToWatchlist,
                removeFromWatchlist,
            }}
        >
            {children}
        </WatchlistContext.Provider>
    );
};
