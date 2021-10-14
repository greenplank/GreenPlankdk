import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trä--plast-kompositer.webp";
import Footer from "../components/footer";
import Head from "next/head";

const traPlast = () => {
  return (
    <Layout pageTitle="tra-plast-kompositter-eller-wpc">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="tra-plast-kompositter-eller-wpc" crumbTitle="tra-plast kompositter" />
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
                        <h2 className="title">Træplastkompositter eller WPC
                        </h2>
                        <div className="mb-30">
                          <p>Plastkompositter eller WPC -udtrykket bruges almindeligvis til at betegne materialer eller produkter fremstillet af en eller flere naturlige fibre eller mel og en polymer eller en blanding af polymerer. Naturlige fibre og mel kommer fra forskellige kilder (f.eks. Træ, risskal, hamp, sisal, jute, kenaf, kokos, hør, mandel, bambus, græs) og alle typer polymerer (jomfru eller genbrug) kan bruges, men kan i øjeblikket de mest almindelige er polyvinylchlorid (PVC), polypropylen (PP) og polyethylen med høj densitet (HDPE).
                          </p>
                          <p className="mb-30 mt-30">Træplastkompositter eller WPC bliver mere og mere populære som et sikkert, miljøvenligt og langtidsholdbart materiale til brug på udendørs dæk, terrasser, broer, beklædning, parkbænke, hegn, gelænder osv. Der er også et voksende marked for potentiale indendørs brug såsom dørkarme, indretning og møbler. I dag er sammensatte produkter overalt fra nationalparker til din nabos baggård.
                          </p>
                          <p className="mb-30 mt-30">Træplastkompositter tilbyder en lang række fordele i forhold til alternativer såsom imprægneret træ og naturligt holdbart cedertræ eller rødtræ: vejrbestandighed, lang levetid og kræver meget lav vedligeholdelse. Sammensatte produkter spiller også en rolle i udviklingen af ​​en mere bæredygtig fremtid: mange WPC -produkter bruger genanvendt plast og træ som råvarer i fremstillingsprocessen.
                          </p>
                          <p className="mb-30 mt-30">Selvom teknologien ikke er ny, vokser interessen for de nye designmuligheder, som denne kombination af materialer tilbyder.
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

export default traPlast;
