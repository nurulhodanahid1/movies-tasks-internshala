import { Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import SearchedMovies from "./pages/SearchedMovies";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:movieId" element={<Movie />} />
                <Route path="/searched" element={<SearchedMovies />} />
                <Route path="/searched/movies/:movieId" element={<Movie />} />
            </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;

