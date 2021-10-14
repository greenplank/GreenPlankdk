import React, { useState } from "react";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/video-cta.webp";

const VideoCard2 = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="about-two pt-120 pb-60">

            <Container>
                <Row>
                    <Col xl={6}>
                        <section className="video-card">
                            {/* <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="u5aosoMYRt4"
                                onClose={() => setOpen(false)}
                            /> */}
                            <div
                                className="video-card__bg"
                                style={{ backgroundImage: `url(${bgImage})` }}
                            ></div>
                            <Container className=" text-center pt-80 pb-80">

                                {/* <h3>
                                   Periodisk rengøring
                                </h3> */}
                                <div className="video-card__btn-block">
                                <iframe width="560" height="550" src="https://www.youtube.com/embed/u5aosoMYRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Container>
                        </section>
                    </Col>
                    <Col xl={6}>

                        <div>
                            <h2>Periodisk rengøring</h2>
                            <p>Alle udvendige overflader samler snavs, støv og forurenende stoffer og kræver rengøring. Det er nødvendigt at rengøre dem regelmæssigt, så de ser godt ud. Green Plank® -kompositter er produkter med lav vedligeholdelse, ikke vedligeholdelsesfrie produkter. Periodisk rengøring af Green Plank® kompositprodukter anbefales, selvom de ser rene ud. Det er vigtigt at forhindre dannelse af pollen / snavs, der kan forårsage skimmelsvamp. Vi anbefaler en grundlæggende rengøring med en sammensat bakkerenser eller en kombination af sæbe (vaskemiddel), varmt vand og en blød børste. Skyl grundigt efter rengøring. Hvis du er i tvivl om, hvilket produkt der bruges til at rense / fjerne pletter fra din vogn, anbefales det, at du tester et lille område på et ubetydeligt sted for at afgøre, om produktet vil forårsage uønsket misfarvning. Skyl hele dækket med en haveslange og ikke med en højtryksrenser. Højtryksrenseren sprøjter sæbepartikler på andre overflader og kan forårsage pletter. Brug af en haveslange er en bedre metode til forsigtigt at skylle hjemmelavet vaskemiddel af og slippe af med alle vandpletter. Husholdnings højtryksrensere med sprøjtedyser kan bruges til at fjerne pletter, snavs eller skimmelsvamp, men risikerer at sprøjte partikler af sæbe på andre overflader.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VideoCard2;
