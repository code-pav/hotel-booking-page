import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        console.log("Header re-rendered.");
        return (
            <nav>
                <div className="main">
                    <Link to="/">Home</Link>
                    <Link to="/store">Rooms</Link>
                </div>
                <div className={"shop"}>
                    <div
                        className={
                            this.props.cartIcon
                                ? "shop-item hidden-opacity"
                                : "shop-item visible-opacity"
                        }
                    />
                    <Link to="/cart">Cart</Link>
                </div>
            </nav>
        );
    }
}

export default Header;
