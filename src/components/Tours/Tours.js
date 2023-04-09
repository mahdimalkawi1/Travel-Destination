import Tour from "./Tour/tour";
import { Link } from "react-router-dom";
import data from "../../data/db.json"
function Tours() {
    console.log(data)
    return (
        <>
            {
                data.map(tour =>{
                    return(
                        <div key={tour.id}>
                            <Link to={`/city/${tour.id}`}>
                            <Tour name={tour.name} image={tour.image} />
                            </Link>
                            </div>
                    )
                })
            }
             </>
    )
}

export default Tours;