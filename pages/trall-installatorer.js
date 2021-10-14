import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-Installeeer.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallinstallatorer = () => {
  return (
    <Layout pageTitle="vogninstallatører">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="vogninstallatører" crumbTitle="vogninstallatører" />
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
                                <h2 className="title">Green Plank certificerede Trall Installatører
</h2>
                                <div className="mb-30">
                                    <p>Vi forstår, hvad det kræver at installere en vogn og holde dine kunder tilfredse. Vores rolle er at gøre det så let som muligt for dig at bevare dine kunders forventninger, så disse kunder bliver en god reference til andre potentielle kunder.
</p>
                                    <p className="mb-30 mt-30">Den største bekymring blandt slutkunder er; kvaliteten af ​​pynten, vedligeholdelsen, garantien og hvornår projektet afsluttes. De kan fortælle dig, hvad de vil, men kender dem ikke rigtigt. Mange gange har slutkunderne for lidt kendskab til alt, hvad der er inkluderet til at færdiggøre et komplet trolley -dæk - de beslutninger, der skal træffes, de detaljer, der skal træffes.
</p>
                                    <p className="mb-30 mt-30">Brug dette websted som din primære kilde til at få de oplysninger, du har brug for vedrørende komposit. På denne måde kan du skabe en bedre kvalitet og længere holdbarhed, hvilket i sidste ende vil betyde, at din kunde bliver rigtig tilfreds.
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

export default trallinstallatorer;
