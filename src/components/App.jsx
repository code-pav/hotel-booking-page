import React from "react";
import "../styles/App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./about/About";
import Home from "./home/Home";
import StoreContainer from "./store/StoreContainer";
import Cart from "./cart/Cart";
import PageNotFound from "./pageNotFound/PageNotFound";
import HeaderContainer from "./header/HeaderContainer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <HeaderContainer />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/store" exact component={StoreContainer} />
                    {/* <Route path="/about" exact component={About} /> */}
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/:d" component={PageNotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
