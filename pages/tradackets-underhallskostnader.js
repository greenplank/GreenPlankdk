import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trädäckets.webp";
import Footer from "../components/footer";
import Head from "next/head";

const tradackets = () => {
  return (
    <Layout pageTitle="vedligeholdelsesomkostninger for tradackets">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="vedligeholdelsesomkostninger for tradackets" crumbTitle="vedligeholdelsesomkostninger for tradackets" />
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
                                <h2 className="title">Omkostninger til vedligeholdelse af trædæk
</h2>
                                <div className="mb-30">
                                    <p>Hvor ofte og hvor dyrt er det at vedligeholde dit dæk?
</p>
                                    <p className="mb-30 mt-30">Mens traditionelle trædæk både støber, mister farve, revner og giver pinde, og så skal du også slibe det ned, olie og male for at holde det pænt og friskt, undgår du dette med Green Plank® -kompositdæk. Et almindeligt trædæk har en levetid på cirka 10-15 år (hvis det vedligeholdes regelmæssigt).
 </p>
                                    <p className="mb-30 mt-30">Foretrækker du ikke at ligge ned og tage det roligt på dit smukke kompositdæk end at sidde på knæ og male? Du behøver aldrig at male eller forsegle dine Green Plank®-dæk med lav vedligeholdelse. Det vil heller ikke revne eller give stokke - tro mig, dine fødder vil sætte pris på det! Insekter har heller ingen interesse i at gnave i plast- og vandskader, du behøver ikke engang tænke på!
</p>
                                    <p className="mb-30 mt-30">Green Plank® kompositdæk med lav vedligeholdelse kræver kun en lille vask med jævne mellemrum, og det forbliver smukt i flere år!
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

export default tradackets;
