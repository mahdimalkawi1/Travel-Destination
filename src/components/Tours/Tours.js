function Tours(props) {
    return (
        <div>
            <h2>{props.toursDetail}</h2>
            <img src={props.image} alt={props.toursDetail} />
        </div>
    )
}

export default Tours;