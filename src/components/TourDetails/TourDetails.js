import { useState } from "react";
import { useParams } from "react-router";
const data = require("../../data/db");

const TourDetails =()=>{
let {id} = useParams()
const [readMore, setReadMore] = useState(false)
return(
<>
{
    data.map(element =>{
        if (element.id ===id){
            return(
                <div>
                    <h2>{element.name}</h2>
                    <img src={element.image} alt={element.name}/>
                    <p>{element.price}</p>
                    <div>
                        {
                            readMore? <>
                            <p>{element.info}</p>
                            <button onClick={()=>setReadMore(false)}>show less</button>
                            </>
                             :
                            <>
                            <p>{(element.info).substring(0,200)}</p>
                            <button onClick={()=> setReadMore(true)}>show more</button>
                            </>
                        }
                    </div>
                </div>
            )
        }
    })
}
</>
   
)

}
export default TourDetails;