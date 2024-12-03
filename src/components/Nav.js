import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
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
                    <Link to="watchlist">Watch list</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
