import React from "react";

const Kitten = ({ name }) => {
    return (
        <div className="col-md-3 col-sm-6 ml-3 mb-3">
            <div className="card" style={style}>
                <img src={`https://robohash.org/${name}.png?set=set4`} className="card-img-top" alt="pokemon" />
                <div className="card-body">
                <h3 className="card-title text-center m-2">{name}</h3>
                </div>
            </div>
        </div>
    )
}

const style = {
    width: "18rem"
}

export default Kitten;