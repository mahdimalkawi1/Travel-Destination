import Header from "../Header/Header"
import Tours from "../Tours/Tours"
import Footer from "../Footer/Footer"


function Home(props) {
    const data=props.data
    return (
        <>
            <Header />
            {/* <div class="container">
                {
                data.map(Tours => {
                    return(
                        <Tours />
                    )
                })
                }
            </div> */}
            {
                data.map(item =>{
                    return(<Tours name={item.name} image={item.image} />)
                })
            }
             <Footer />
        </>
    )
}
export default Home;