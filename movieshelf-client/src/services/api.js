
const BASE_URL="http://localhost:8080"

export const getDiscoverMovies = async () => {
    const response = await fetch(`${BASE_URL}/api/movies`);
    const data = await response.json();
    return data.results;
}