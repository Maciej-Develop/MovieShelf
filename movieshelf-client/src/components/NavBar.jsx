import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {

    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
      e.preventDefault();
      alert(query);
    };

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">MovieShelf</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
        </ul>
        <form onSubmit={handleSearch} className="d-flex" role="search">
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}/>
          <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
  </nav>
}

export default NavBar;