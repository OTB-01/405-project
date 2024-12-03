import { useState } from "react";
import MoviesResults from "./MoviesResults";
import "./Search.css";

const Search = () => {
    const [searchMovie, setSearchMovie] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const handleSearch = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?` +
                `api_key=01ab5431d8081ddcccd7e4f75dc3905a` +
                `&query=${searchMovie}`
        );
        const responseJSON = await response.json();
        setSearchResult(responseJSON.results);
    };
    return (
        <>
            <div className="search-container">
                <h1>Search for a movie</h1>
                <div className="search-wrapper">
                    <input
                        type="text"
                        placeholder="Search for a movie"
                        onChange={(e) => setSearchMovie(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            {searchResult && <MoviesResults movies={searchResult} />}
        </>
    );
};

export default Search;
