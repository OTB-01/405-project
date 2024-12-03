import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doSignOut } from "../firebase/auth";
import "./Nav.css";

const Nav = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="search">Search</Link>
                </li>
                <li>
                    <Link to="watchlist">WatchList</Link>
                </li>

                {userLoggedIn ? (
                    <li>
                        <button
                            onClick={() => {
                                doSignOut().then(() => {
                                    navigate("/");
                                });
                            }}
                        >
                            Sign out
                        </button>
                    </li>
                ) : (
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Nav;
