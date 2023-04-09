import Tour from "./Tour/tour";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
function Tours(props) {
    return (
            
        <>
            {
                props.data.map(tour =>{
                    return(
                        <div key={tour.id}>
                            <Link to={`/city/${tour.id}`}>
                            <Tour name={tour.name} image={tour.image} />
                            </Link>
                            </div>
                    )
                })
            }
             <Footer />
             </>
    )
}

export default Tours;