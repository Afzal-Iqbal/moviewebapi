import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=df29477d&i=${id}`) // i for single movie data according to the api
                setMovie(response.data) // <-- use response.data (was setting whole response)
                console.log(response.data)
            } catch (err) {
                console.log("Error in fetching movie detail api", err)
            }
        }
        getMovie();
    }, [id])

    if (!movie) return <p className="text-center mt-8 text-gray-500">Loading...</p>

    return (
        <div className="movie-detail max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            <img
                alt={movie.Title}
                src={movie.Poster}
                className="w-full md:w-48 h-auto rounded-md object-cover shadow-sm"
            />
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
                <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Genre:</span> <span className="ml-1">{movie.Genre}</span></p>
                <p className="text-sm text-gray-600 mb-3"><span className="font-semibold">Released:</span> <span className="ml-1">{movie.Released}</span></p>
                <p className="text-gray-800 leading-relaxed"><span className="font-semibold">Plot:</span> <span className="ml-1">{movie.Plot}</span></p>
            </div>
        </div>
    )
}

export default MovieDetail
