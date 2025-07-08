

const Child1 = (props) => {
    const praveen = "Praveen";
    return (
        <div>
            <h2>I am the child</h2>
           <button onClick={()=> props.lift(praveen)}>Send TO Parent</button>
        </div>
    )

}

export default Child1;