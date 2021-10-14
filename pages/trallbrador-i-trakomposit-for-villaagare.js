import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-Replacement-Tips.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallbrador = () => {
  return (
    <Layout pageTitle="trallbrador-i-trakomposit-til-villaagare">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="trallbrador-i-trakomposit-til-villaagare" crumbTitle="trallbrador-i-trakomposit-til-villaagare" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div>
                <div className="row">
                  <div className="blog-details col-12">
                    <div className="blog-inner">
                      <div className="media"><div className="image"><img src={blogImg} alt="" /></div></div>
                      <div className="content">
                        <h2 className="title">Pallebrædder i trækomposit til boligejere</h2>
                        <div className="mb-30">
                          <p>At bygge et trædæk er et af de fem (5) højest rangerede ønsker i en villahave. Det er en investering, der kan betale sig gennem øget værdi af ejendommen.
                          </p>
                          <p className="mb-30 mt-30">Husejere vælger ofte en forlængelse af et trædæk for at udvide boligarealet i løbet af foråret / sommeren / efteråret. Et trædæk er et af hjemmets bedste rum, hvilket øger hjemmets funktion og giver plads til smukke dage udendørs og vidunderlige grillaftener, fra det tidlige forår til det sene efterår. At vælge det rigtige materiale for at minimere vedligeholdelsen er grundlaget for et godt trædæk. Stressede husejere / familier med børn i kombination med et stærkt ønske om en gårdhave, med letplejede materialer har skabt en stor efterspørgsel efter nye produkter / materialer. Minimal vedligeholdelse, vær fri i din fritid…. Nyd på trædækket!
                          </p>
                          <p className="mb-30 mt-30">Green Plank®-vedligeholdelsesfrit pynt, hegn / planke, gelænder, facadepanel og udendørs møbler har en unik og naturlig trælignende funktion og udseende.
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 section-space--top--60">
                    {/* <BlogComment/> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default trallbrador;
