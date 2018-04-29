import React, { Component} from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Carousel from"../../components/Carousel";
import Bio from "../../components/Bio";
import { Container } from "../../components/Grid/Container";
import Events from "../../components/Events";



class Home extends Component {
    state = {
    
    };

    render() {
        return (
    
            <Wrapper>
                <Nav />
                    <Carousel />
                        <Container />
                            <Events />
                                <Bio />
                                    <Footer /> 
            </Wrapper>
            
        );
    }
}


export default Home;
