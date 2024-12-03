import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext/index.jsx";
import { WatchlistProvider } from "./context/watchlistContext/watchlistContext.js";
import ProtectedRoute from "./components/ProtectedRoute";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Search from "./components/Search.js";
import Login from "./components/Login.js";
import MovieDetails from "./components/MovieDetails.js";
import WatchList from "./components/WatchList.js";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <WatchlistProvider>
                    <div className="App">
                        <Nav />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/movie-details/:id"
                                    element={<MovieDetails />}
                                />

                                <Route
                                    path="watchlist"
                                    element={
                                        <ProtectedRoute>
                                            <WatchList />
                                        </ProtectedRoute>
                                    }
                                />

                                <Route path="search" element={<Search />} />
                            </Routes>
                        </main>
                    </div>
                </WatchlistProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
