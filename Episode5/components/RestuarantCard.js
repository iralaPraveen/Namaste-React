

const RestuarantCard = (props ) => {

  console.log("These is verifying by the user praveen  reddy",props);
  //   console.log(props);
  //   const { name, cusine, place } = props;
  //   console.log("Name of the", name);
  //   console.log("Name of the cusine", cusine);
  //   console.log("Name of the place", place);
  // Destructuring the array
  const { name, receipe, rating, price, deliveryTime, image } = props.resturantList;
  return (
    <div className="restuarant-card" style={{ backgroundColor: "yellow " }}>
      <img className="restuarant-logo" alt="restuarant-logo" src={image} />
      <h3>{name}</h3>
      <h4>{receipe}</h4>
      <h4>{rating}</h4>
      <h4>{price}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestuarantCard;