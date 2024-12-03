import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Search from "./components/Search.js";

import "./App.css";
import MovieDetails from "./components/MovieDetails.js";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/movie-details/:id"
                            element={<MovieDetails />}
                        />
                        <Route path="search" element={<Search />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
