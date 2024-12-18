import React from "react";
import reactDOM from "react-dom/client";
import logoimage from '/res-logo.jpg';
import styled from "styled-components";

const resObj = [
    {
        "id": "449026",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Divyasree Techridge",
        "areaName": "Manikonda",
        "costForTwo": "350 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgrating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingString": "1K+",
        "deliveryTime": 50,
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO 100"
        }
    }
]

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;


const Logo = () => {
    return <img src={logoimage} height="50" alt="logo" />
}


const NavItems = () => {
    return (
        <ul className="d-flex list-unstyled">
            <li className="px-3">
                Home
            </li>
            <li className="px-3">
                About
            </li>
            <li className="px-3">
                Profile
            </li>
        </ul>

    )
}

const RestaurantCard = (props) => {
    console.log(props);
    const { name, cuisines, areaName, costForTwo } = props.resData
    return (
        <div className="col-3 p-3">
            <div className="border border-secondary">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy.f_auto.q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" height="300" alt="res1" />
                <h1>{name}</h1>
                <h3>{cuisines}</h3>
                <h4>{areaName}</h4>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}

const MainWrapper = () => {
    return (
        <div className="container-fluid px-5 mt-3 main-wrapper">
            <div className="input-group mb-3">
                <input type="text" class="form-control border border-secondary" placeholder="Search Restaurant" aria-label="Recipient's username"></input>
                {/* <button className="btn btn-sm btn-secondary px-3" type="button">Search</button> */}
                {/* {/* <Button>Normal</Button> */}
                <Button $primary>Search</Button> */
            </div>
            <div className="d-flex flex-wrap row">
                <RestaurantCard resData={resObj[0]} />
                <RestaurantCard resData={resObj[0]} />
                <RestaurantCard resData={resObj[0]} />
                <RestaurantCard resData={resObj[0]} />
                <RestaurantCard resData={resObj[0]} />
                <RestaurantCard resData={resObj[0]} />
            </div>
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div className="d-flex justify-content-between">
            <Logo />
            <NavItems />
        </div>
    );
}


const App = () => {
    return (
        <div>
            <h1>Hello World! from react js</h1>
            <HeaderComponent />
            <MainWrapper />
        </div>
    );
}

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(<App />);