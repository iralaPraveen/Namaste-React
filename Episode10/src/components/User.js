// import React from "react"
import { useState } from "react"
const User = () => {
    const [count] = useState(0) // creating of the state variabe.
    const [count1] = useState(0)
    return (
        <div className="user-card">
            <h1>{`Count: ${count}`}</h1>
            <h1>{ `Count1: ${count1}`}</h1>
            <h1>Name:I PRAVEEN</h1>
            <h1>Location : CHITTOOR</h1>
            <h1>Conact : +43 2342 4313 45</h1>
        </div>
    )
}
// export default User