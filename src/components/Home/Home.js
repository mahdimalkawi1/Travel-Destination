import Header from "../Header/Header"
import Tours from "../Tours/Tours"
import Footer from "../Footer/Footer"


function Home(props) {
    const data=props.data
    return (
        <>
            <Header />
            <div class="container">
                {
                data.map(Tours => {
                    return(
                        <Tours toursName={Tours.name} image={Tours.image}/>
                    )
                })
                }
            </div>
             <Footer />
        </>
    )
}
export default Home