import React, { Component} from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { Container, Row, Col } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";


class Home extends Component {
    state = {
    
    };

render() {
    return (
   
        <Wrapper>
            <Nav />
              <Row>
                <Col size="md-12">
                  <Jumbotron>
                    <h1 className="text-center">
                      <strong>test</strong>
                    </h1>
                  </Jumbotron>
                </Col>
              </Row>
          <Footer />
        </Wrapper>
        
    );
}

}


export default Home;
