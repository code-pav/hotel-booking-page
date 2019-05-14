import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="main">
                    <Link to="/">Home</Link>
                    <Link to="/store">Store</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="shop">
                    <Link to="/cart">Cart</Link>
                </div>
            </nav>
        );
    }
}

export default Header;
