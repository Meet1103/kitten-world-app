import React from "react";
import Kitten from "./Kitten";

const KittenList = ({ kittens }) => {
    return (
        <div className="row kittens">
        {
            kittens.map((user,i) => {
            return (
            <div>
            <Kitten
            key={kittens[i].id}
            name={kittens[i].username}
            /> 
            </div>
            )
            })
        }
        </div>
    )
}

export default KittenList;