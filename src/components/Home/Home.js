import "./Home"
import Tours from "../Tours/Tours";
import Header from "../Header/Header";


function Home(props) {
    return (
        <>
        {/* <Header/> */}
            <Tours data={props.data}/>
        </>
    )
}
export default Home;