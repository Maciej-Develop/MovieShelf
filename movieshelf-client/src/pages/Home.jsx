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

    return <> 
    <div className="row justify-content-center">
        {movies.map((movie) => (
            <div className="col-md-3 mb-4">
                <MovieCard movie={movie} key={movie.id}/>
            </div>
        ))}
    </div>
    {loading && <div className="d-flex justify-content-center"><div className="spinner-border" role="status"></div></div>}
    {!loading && !error && <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={handleLoad}>Load More</button>
        </div>}
    {error && <div className="d-flex justify-content-center alert alert-danger">{error}</div>}
    </>
}

export default Home;