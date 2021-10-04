import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import causeImage from "../assets/images/resources/1.webp";
const FeaturedCause = () => {
  return (
    <section className="about-two pt-80 pb-80 featured-cause"> 
      <Container>
        <div className="inner-container background-secondary ">
          <Row>
            <Col lg={4}>
              <img src={causeImage} className="img-fluid" alt="" />
            </Col>
            <Col lg={8} className=" d-flex">
              <div className="my-auto" >
                <h6 style={{marginBottom:"1em",color:"white"}}>Fremhævet artikel </h6>
                <h3>Test af forskellige materialer til anløbsbroer fra Öresund</h3>
                <p style={{color:"white"}}>
                Ydelse af forskellige terrassematerialer, der er tilgængelige på markedet – konserveringsbehandlet træ, modificeret træ, naturligt holdbart træ, genanvendt plast og træplastkompositter (WPC’er) eksponeret i to kajer nær Øresundsbroen syd for det centrale Malmö i Sverige.
                </p>
                <h8 style={{marginBottom:"1em",color:"white"}}>Rapporten er oversat fra svensk til engelsk. Alle kreditter går til SP / RISE.</h8>
                <Link href="/artiklar">
                <a className="thm-btn p-2 ml-2" style={{background:"black"}}>Læs mere</a>
              </Link>
              </div>
             
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCause;
