import { Link } from "react-router-dom";

function NavBar() {
    return <nav>
    <div>
        <Link to="/">
            Movie Shelf
        </Link>
        <div>
            <Link to="/">Home</Link>
        </div>
    </div>
</nav>
}

export default NavBar;