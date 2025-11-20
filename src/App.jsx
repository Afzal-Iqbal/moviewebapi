import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Button } from "./components/ui/button"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import MovieDetail from "./components/pages/MovieDetail"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      </Routes>
      {/* Button should be outside Routes */}
      <Button>Second Button</Button>
    </Router>
  )
}

export default App
