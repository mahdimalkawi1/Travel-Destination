import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import TourDetails from "./components/TourDetails/TourDetails";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const data = require("./data/db.json")

function App() {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Header /> */}
        <div className="App">
            <Routes>
                <Route path="/" element={<Home data={data}/>}></Route>
                <Route path="/city/:id" element={<TourDetails/>}></Route>

            </Routes>
        <Footer />
        </div>
        </>
    )
}

export default App;