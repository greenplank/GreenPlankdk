import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../assets/images/backgrounds/GREEN-PLANK-ABOUT-banner-1-1-1.webp";
import image2 from "../../assets/images/backgrounds/about-1.webp";
import image3 from "../../assets/images/backgrounds/about-2.webp";
import image4 from "../../assets/images/backgrounds/about-profile.webp";

const AboutOne = () => {
  return (
    <section className="about-one text-center pt-120 pb-40">
      <Container>
        <Row style={{ marginBottom: "4em" }}>
          <Col lg={12}>
            <h4 style={{ marginBottom: "2em" }}>
            Hej, vi er Green Plank, vi tilbyder hidtil usete miljøvenlige byggeprodukter fremstillet af genbrugsplast og naturligt affald.
            </h4>
          </Col>
          <Col lg={12}>
            <img src={image1} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={6}>
          <img src={image4} alt="" width="510px" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={image3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={12} style={{ marginBottom: "4em" }}>
              <div className="block-title">
                <h3>Velkommen til GreenPlank</h3>
                <h2>15 års erfaring i branchen</h2>
                <h5>
                I 2001 deltog en ung forretningsmand Jamshaid Gill fra Pakistan på en messe i Wien, Østrig på et seminar om innovation inden for teknologi til kompositprodukter fremstillet med en række genbrugsmaterialer og naturligt affald.
                </h5>
                <h5>
                Han blev inspireret af talen holdt af en amerikansk professor om bæredygtige byggeprodukter med trælignende egenskaber og udseende af en blanding af genbrugsplast og naturligt affald såsom risskaller, hvedestrå, savsmuld, bambuschips, kokosnøddeskaller, sojabønneskrog, jordnøddeskaller, bomuldsstrå osv.
                </h5>
                <h5>
                Green Plank-produkter bruges af mange svenske kommuner i hele Sverige.
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg={6}>
          <img src={image2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <div className="block-title">
              <h3 style={{ marginBottom: ".5em" }}>
                <span>15</span>Års erfaring
              </h3>
              <h5>
              Risskaller blandet med genanvendt plast for at producere træalternativ og dets positive indvirkning på miljøet blev ideen om Green Plank udtænkt.
              </h5>
              <h5>
              Han vendte tilbage til sit hjemland, Pakistan og begyndte sit arbejde med at udvikle et træalternativt produkt fremstillet af genbrugsplast og risskrogfibre.
              </h5>
              <h5>
              Siden starten i 2004 har Green Plank sat sig for at forstyrre den bæredygtige byggematerialebranche med innovative kompositprodukter fremstillet af genbrugsmateriale og naturligt affald.
              </h5>
              <h5>
              I 2015 modtog Green Plank en anerkendelsespris “Årets Nybyggare” fra Hans Majestæt Kong Carl Gustav. Green Plank blev rost for at repræsentere Sverige som en miljøvenlig nation.et med en række genbrugsmaterialer og naturligt affald.
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
