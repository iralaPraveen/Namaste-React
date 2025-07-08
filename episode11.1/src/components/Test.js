

const Test = (props) => {
    console.log(props);
    return (
        <div>
            <h1>These is component that is beign coming from Tested</h1>
            <input onChange={props.changeHandler}/>
        </div>
    )
}


export default Test;