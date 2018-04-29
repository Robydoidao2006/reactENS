import React, { Component} from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import About from "../../components/About";

class Aboutus extends Component {
    state = {
    
    };

render() {
    return (
   
        <Wrapper>
            <Nav />
             <About />
          <Footer />
        </Wrapper>
        
    );
}

}


export default Aboutus;
