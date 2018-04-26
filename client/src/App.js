import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";



const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/" component={}/>
        <Route exact path="/" component={}/>
        <Route exact path="/" component={}/>
        <Route exact path="/" component={}/>
        <Route exact path="/" component={}/> */}
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>

);



export default App;
