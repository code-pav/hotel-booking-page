import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About";
import StoreContainer from "./store/StoreContainer";
import Cart from "./cart/Cart";
import PageNotFound from "./pageNotFound/PageNotFound";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/store" exact component={StoreContainer} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/:d" component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default App;
