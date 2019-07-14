import React from "react";
import background from "../../images/bg.jpg";
// import { Link } from "react-router-dom";

import setBackground from "../../api/setBackground";
class Home extends React.Component {
    componentDidMount() {
        setBackground("body", background);
    }
    render() {
        return (
            <main>
                <h1>Beach resort</h1>
            </main>
        );
    }
}

export default Home;
