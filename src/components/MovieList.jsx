import MovieCart from "./MovieCart";

function MovieList({ movies = [] }) {
  if (movies.length === 0) {
    return (
      <p className="text-center text-gray-500 py-6">
        No movies found
      </p>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <MovieCart key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
