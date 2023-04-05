import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import TourDetails from "./Components/TourDetails/TourDetails";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const ToursData = require("./data/db.json")

function App() {

    return (
        <Router>
            <Navbar />
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home data={ToursData}/>}></Route>
                <Route path="/city/:id" element={<TourDetails/>}></Route>

            </Routes>
            <Footer />
        </div>
        </Router>
    )
}

export default App