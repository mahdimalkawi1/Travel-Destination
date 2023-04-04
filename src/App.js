import Home from "./components/Home/Home";

const ToursData = require("./data/db.json")

function App() {

    return (
        
        <div>
            <Home data={ToursData}/>

        </div>
    )
}

export default App