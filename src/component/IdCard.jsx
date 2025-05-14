import React from "react"

function IdCard({lastName, firsName, gender, height, birth, picture }) {


    return(
        <div>
            <img src={picture} alt={`${firsName} ${lastName}`} />
            <div>
                <p>First name: {firsName}</p>
                <p>Last name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard