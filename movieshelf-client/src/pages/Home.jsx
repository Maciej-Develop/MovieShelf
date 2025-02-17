import MovieCard from "../components/MovieCard";
import { getDiscoverMovies } from "../services/api";
import { useEffect,useState } from "react";

function Home() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadMovies = async () =>{
            try {
                const discoverMovies = await getDiscoverMovies(page)
                if (discoverMovies == null) {
                    throw "no movies"
                }   
                setMovies((prevMovies) => {
                    let newMovies = discoverMovies.filter(
                        (movie) => !prevMovies.some((prev) => prev.id === movie.id)
                    );
                    return [...prevMovies, ...newMovies];
                })
            } catch (err) {
                console.log(err);
                setError("Failed to load movies.")
                setPage(page - 1)
            }
            finally{
                setLoading(false)
            }
        }
        loadMovies()
        }, [page]);

    const handleLoad = () => {
        setPage(page + 1);
        setLoading(true);
    }

    return <div className="home">
        <div className="row row-cols-1 row-cols-md-5 gap-4 justify-content-center">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
        {loading && <div><p className="mt-4">Loading ...</p></div>}
        {!loading && !error && <div>
                <button className="btn btn-primary mt-4" onClick={handleLoad}>Load More</button>
            </div>}
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
}

export default Home;