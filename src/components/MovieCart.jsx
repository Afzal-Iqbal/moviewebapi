import { Link } from "react-router-dom";

function MovieCart({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1 flex flex-col">

      <img
        alt={movie.Title}
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
        className="w-full h-48 object-cover"   // ✅ smaller vertical card
      />
      <div className="p-2 flex-grow flex flex-col justify-between">
        <h3 className="text-sm font-semibold text-gray-800 text-center mb-1">
          {movie.Title}
        </h3>
        <p className="text-xs text-gray-500 text-center mb-2">{movie.Year}</p>
        <Link
          to={`/movie/${movie.imdbID}`}
          className="block text-center bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition text-xs"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCart;
