function Tours() {
    const ToursData = {};
    ToursData = require("../../data/db.json")

    return (
        <>
            {
                data.map((obj) => {
                    return (
                        <div>
                            <p>{`name : ${obj.name}`}</p>
                            <img alt="place" src={`${obj.image}`} />
                        </div>
                    );
                })
            }
        </>
    )
}

export default Tours;