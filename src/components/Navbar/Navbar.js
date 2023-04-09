import Home from "../Home/Home";
import "./Navbar";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
        <nav>
        {/* <link to="/">Home</link> */}
        <Home/>
        </nav>
    )
}
export default Navbar;