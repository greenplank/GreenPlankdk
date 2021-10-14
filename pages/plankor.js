import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import PlankorSection from "../components/Produkter/plankorSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Image1 from "../assets/images/backgrounds/plankor1.webp"
import Image2 from "../assets/images/backgrounds/plankor.webp"

const Plankor = () => {
    return (
        <>
            <Head>
                <title>Udendørs bænke</title>
                <meta name="title" content="Hög kvalitet Plankor &amp; Komposittrall | - GreenPlank.se" />
                <meta name="description" content="Plankor ger en slät konsistens som är lätt att rengöra och lätt att underhålla. Det är vattentätt och kan användas som en ekonomisk mimeografi av keramiska plattor." />
            </Head>
            <Layout pageTitle="Udendørs bænke">
                <HeaderTwo />
                <PageHeader title="Udendørs bænke" crumbTitle="Udendørs bænke" />
                <StickyHeader />
                <PlankorSection />
                <section className="about-one pt-20 pb-40">
                    <Container>
                        <Row style={{ marginBottom: "2em" }}>
                            <Col lg={12}>
                                <div>
                                    {/*====================  project gallery area ====================*/}
                                    <div className="project-gallery-area pb-60">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {/* section title */}
                                                    <div className="section-title-area text-center mb-30">
                                                        <h2><strong>Hvorfor bruge komposit terrassebrædder?</strong></h2>
                                                    </div>
                                                </div>
                                                <div className="about-section pt-60 pb-60">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30 p-30">
                                                                <div className="about-image-two mr-20">
                                                                    <img src={Image1} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30 ml-60" style={{ padding: "1em 1em 1em 2em" }}>
                                                                <div>
                                                                    <h3>PROBLEMFRIE KOMPOSITPLANTER</h3>
                                                                    <p>
                                                                    Planker er ikke nye. Det har eksisteret siden 70'erne. Green Plank kompositplanker er godt testet af testlaboratorier med et godt omdømme som tyske og svenske tekniske forskningsinstitutter. Grønne plankekompositplanker kræver lidt eller ingen vedligeholdelse og dækkes af op til 25 års begrænset produktgaranti. Traditionelle planker skal derimod vedligeholdes mindst hvert andet år og udskiftes hvert 10-15 år.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="about-section ">
                                                    <div className="container">
                                                        <div className="row row-25 align-items-center">
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-content-two">
                                                                    <h3>Green Plank - kompositplanker med lav vedligeholdelse, der både er smukke, holdbare og giftfri!</h3>
                                                                    <p>
                                                                    Med kompakte planker fra Green Plank kan du forvente en jævn, smuk farve i det lange løb. Omvendt vil trykbehandlet træ vise inkonsekvent farvning og kvalitet over tid, selv når det vedligeholdes korrekt.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-30">
                                                                <div className="about-image-two">
                                                                    <img src={Image2} className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*====================  End of project gallery area  ====================*/}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default Plankor;
