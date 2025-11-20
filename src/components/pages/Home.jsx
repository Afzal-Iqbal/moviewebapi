import { useState, useEffect } from 'react';
import MovieList from '../MovieList';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Avengers");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async (searchQuery = "Avengers") => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=df29477d&s=${searchQuery}`
        );
        setMovies(response.data.Search || []);
        setLoading(false);
        // console.log("Fetched movies:", response.data.Search);
      } catch (err) {
        console.error("Error fetching the data", err);
      }
    };

    fetchMovies(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // triggers useEffect by updating query
    setQuery(e.target.search.value);
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
        <input
          name="search"
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for a movie..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search 🔎
        </button>
      </form>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />   }
      {/* ✅ Pass movies down */}
      
    </div>
  );
}

export default Home;
