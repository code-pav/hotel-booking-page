import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <main>
                <h3>
                    This project about using React and Redux to create hotel
                    rooms booking site.
                </h3>
                <Link to="/store">
                    <button>Go to rooms</button>
                </Link>
            </main>
        );
    }
}

export default Home;
