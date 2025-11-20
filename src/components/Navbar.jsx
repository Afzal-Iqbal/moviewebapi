import { Link } from "react-router-dom"

function Navbar() {
return (
    <div className="container mx-auto p-4">
            <nav className="flex justify-between items-center bg-gray-800 p-4 rounded">
                    <Link className="text-white text-2xl font-bold" to="/">
                            <h2>🎬 Movie Explorer</h2>
                    </Link>
                    <Link className="text-white hover:text-gray-400" to="/">Home</Link>
            </nav>
            	{/* <div class="movie-detail">
		<h2>Avengers: Infinity War</h2>
		<img alt="Avengers: Infinity War" src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg">
		<p><strong>Genre:</strong> Action, Adventure, Sci-Fi</p>
		<p><strong>Released:</strong> 27 Apr 2018</p>
		<p><strong>Plot:</strong> The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.</p>
	</div> */}
    </div>
)
}

export default Navbar
