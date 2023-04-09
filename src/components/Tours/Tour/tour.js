// import "./Tour.css";

// function Tour(props) {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <img src={props.image} alt={props.name} />
//         </div>
//     )
// }
const Tour = (props) => {
    <>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name} />
    </>
}
export default Tour;