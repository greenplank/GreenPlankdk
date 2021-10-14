import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import GolvplattorSection from "../components/Produkter/GolvplattorSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/backgrounds/golvplattor1.webp"
import Image2 from "../assets/images/backgrounds/golvplattor.webp"
import Head from "next/head";

const golvplattor = () => {
    return (
        <>
            <Head>
                <title>Daekfliser</title>
                <meta name="title" content="Daekfliser och komposit balkongplattor - GreenPlank.se" />
                <meta name="description" content="Daekfliser och sammansatta balkonger är perfekta för att återskapa utomhusgolv som uteplatser, tak, balkonger och täcka tuffa inomhusgolv." />
            </Head>
            <Layout pageTitle="Daekfliser">
                <HeaderTwo />
                <PageHeader title="Daekfliser" crumbTitle="Daekfliser" />
                <StickyHeader />
                <GolvplattorSection />
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
                                                        <h2><strong>Hvorfor bruge kompositfliser?</strong></h2>
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
                                                            <div className="col-lg-6 col-12 mb-30 ml-60">
                                                                <div>
                                                                    <h3>Vores dæk og altanfliser kan være flød over en stabil og flad overflade</h3>
                                                                    <p>
                                                                    Ikke i modsætning til et indendørs gulv kan InstaClick & EverTile dæk og balkonfliser svæves over enhver eksisterende flad overflade. Dette åbner alle mulige muligheder for at skabe et udendørs rum uden at skulle lægge bjælker og ankre.
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
                                                                    <h3>Vores dæk og altanfliser kan være installeret uden værktøj</h3>
                                                                    <p>
                                                                    For de uerfarne er InstaClick & EverTile dæk og altanfliser et godt valg. De snappes let sammen uden rod, uden besvær og ja – uden værktøj.
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

export default golvplattor;
