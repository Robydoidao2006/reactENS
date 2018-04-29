import React, { Component} from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Links from "../../components/Links";

class HelpfulLinks extends Component {
    state = {
    
    };

render() {
    return (
   
        <Wrapper>
            <Nav />
                <Links />
                    <Footer />
        </Wrapper>
        
    );
}

}


export default HelpfulLinks;
