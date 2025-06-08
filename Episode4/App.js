import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*
Header
 logo
 navItems:
  About
  Home
  cart

Body
 search bar
 restuarnt-container:
  resturant-cards:
   image
   rating
   deliverytime

Footer
 copyright
 link
 address
 contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f"
          alt="ice cream bomma"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Cart</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    id: "1001",
    name: "Santosh Family Dhaba",
    receipe: "Tomato Soup",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "22 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkcibe6x1ychvzjkywxk",
  },
  {
    id: "1002",
    name: "Cafe Niloufer",
    receipe: "Maska Bun",
    rating: "4.5",
    price: "₹400 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc9t0kiq7lhsd3pndohf",
  },
  {
    id: "1003",
    name: "Santosh Family Dhaba",
    receipe: "Crispy Corn",
    rating: "4.5",
    price: "₹560 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dwqb8nhiop8fvqya0alq",
  },
  {
    id: "1004",
    name: "Grameen Kulfi",
    receipe: "Sitaphal Stick Kulfi",
    rating: "4.6",
    price: "₹120 for two",
    deliveryTime: "18 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vu0thsifji9wgfuzfmic",
  },
  {
    id: "1005",
    name: "Nrs Nandini",
    receipe: "Idli",
    rating: "4.4",
    price: "₹150 for two",
    deliveryTime: "21 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9fa5ca30c3db622c69cec0326ff63b41",
  },
  {
    id: "1006",
    name: "Utsav Vegetarian",
    receipe: "Kaju Paneer Biryani",
    rating: "4.1",
    price: "₹300 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y2lkcxxax3794vepe2se",
  },
  {
    id: "1007",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
];

// const styleCard = {backgroundColor: "red"};

// you can also write as const RestuarantCard = ({resturantList} ) 
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="restuarant-container">
        {resList.map((restuarant) => {
          return (
            <RestuarantCard key={restuarant.id} resturantList={restuarant} />
          );
        })}
        {/*<RestuarantCard name="Teja&Hari" cusine="West India" />*/}
      </div>
    </div>
  );
};

const app = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/*Footer*/}
    </div>
  );
};
root.render(app());
