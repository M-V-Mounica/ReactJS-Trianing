import React from "react";
import reactDOM from "react-dom/client";
import logoimage from '/res-logo.jpg';

const Logo = () => {
    return <img src={logoimage} height="50" alt="logo" />
}


const NavItems = () => {
    return (
        <ul className="d-flex list-unstyled">
            <li className="px-2">
                Home
            </li>
            <li className="px-2">
                About
            </li>
            <li className="px-2">
                Profile
            </li>
        </ul>

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
        </div>
    );
}

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(<App />);