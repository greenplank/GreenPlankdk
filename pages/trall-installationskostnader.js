import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-installations.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallinstallationskostnader = () => {
  return (
    <Layout pageTitle="installationsomkostninger">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="installationsomkostninger" crumbTitle="installationsomkostninger" />
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
                        <h2 className="title">Installationsomkostninger til trall
</h2>
                        <div className="mb-30">
                          <p>Omkostninger til installation af vogn afhænger af hvilken type vognmateriale du bruger, og om du ansætter en entreprenør eller selv bygger dæk. Omkostningerne ved konstruktionen skal være de samme for både komposit- og træplader. Den reelle omkostningsforskel kommer, når du sammenligner omkostningerne ved plankerne. Green Plank® kompositfliser med lav vedligeholdelse er meget lette at installere. Trods alt koster Green Plank® -kompositdæk omkring 25% mere at designe end trædæk.
</p>
                          <p className="mb-30 mt-30">Installationsomkostninger for alle dæk angives for basismodeller, før der tilføjes forbedringer eller forbedringer. En anden dækforbedring, der vil øge dækinstallationsomkostningerne, er at have elektrisk service såsom afsætningsmuligheder eller belysning. En anden dækforhøjelse har en markise, der kan trækkes tilbage, så der er skygge installeret over dækket.
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

export default trallinstallationskostnader;
