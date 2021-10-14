import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/products/innerPages/Komposittrall/EVERDECKKomposittrall.webp";

import Head from "next/head";
import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg6 from "../assets/images/projects/greenplank-composite-decking-installation-guide-1.jpg";
import Footer from "../components/footer";

const everdeck = () => {
    return (
        <>
            <Head>
                <title>EVERDECK™</title>
                <meta name="title" content="EVERDECK™ - GreenPlank.se" />
                <meta name="description" content="Komposittrall med träkänsla, kvalitet och skönhet i fokus. Prisvärda kompositdäck som passar stil och budget." />
            </Head>
            <Layout pageTitle="Everdeck terrassebrædder">
                <HeaderTwo />
                <StickyHeader />
                <PageHeader title="Everdeck terrassebrædder" crumbTitle="everdeck-terrassebrædder" />
                <section className="blog-details pt-120 pb-40">
                    <Container>
                        <Row>
                            <Col md={12} lg={12}>
                                <div className="page-wrapper pt-60 pb-60">
                                    {/*Smart Classic section start*/}
                                    <div className="project-section">
                                        <div className="container">
                                            <div className="row">

                                                {/*====================  Star Smart Classic Section-1 content ====================*/}
                                                <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                                                    <div className="project-details">
                                                        <h2>EVERDECK ™ Komposit Terrassebrædder</h2>
                                                        <strong>overkommelig kompositplank, der passer til din stil og dit budget – PVC-fri!
                                                        </strong>
                                                        <div class="et_pb_text_inner">
                                                            <div class="ce_text block">

                                                                <strong>Inspireret af den skandinaviske designtradition præget af æstetik, enkelhed og funktionalitet.
                                                                </strong>
                                                                <p>
                                                                    Everdeck er en af ​​de mest populære pyntemuligheder med lav vedligeholdelse, når det gælder overkommelighed. Du må dog ikke forveksle, at dette pyntede lavt budget er af mindre kvalitet. Hvad der gør Everdeck godt, er at bortset fra at være billigere, er det forbløffende og holdbart på samme tid. Med et så overraskende overkommeligt alternativ er der simpelthen ingen grund til at nøjes med farvning, forsegling, splinter og konstant vedligeholdelse.
                                                                </p>
                                                                <p>Høj skridsikker elegant, ribbet / rillet børstet overflade muliggør god trækkraft i våde områder som f.eks. Omkring bassiner, de er sikre at gå på med bare fødder.
                                                                </p>
                                                                <div>
                                                                    <ul>
                                                                        <li><strong>Ensartethed </strong>–  HidLoc ™ dolda fästelement säkerställer en slät och enhetlig yta som är säker att gå på.</li>
                                                                        <li><strong>Gratis tilbehør</strong> Komplet dine drømmende terrassedækdesign med vores fascia-trim og betræk – det perfekte match til din højtydende EVERDECK™ pyntede.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*====================  End of Smart Classic Section-1 content  ====================*/}

                                                {/*====================  Star Smart Classic Section-2 content  ====================*/}
                                                <div className="col-lg-12 mb-80">
                                                    <div className="project-gallery-wrapper">
                                                        <div className="row">
                                                            <div className="col-md-6 col-mobile-6 mb-20">
                                                                <div className="single-gallery-project">
                                                                    <div className="single-gallery-project__image">
                                                                        <img src={Image1} className="img-fluid" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-mobile-6 mb-20">
                                                                <div className="project-information">
                                                                    <h3>Produkt information</h3>
                                                                    <table width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left"><strong>Overflade:</strong></td>
                                                                                <td align="left">Dybt rillet med en plan finish på bagsiden med naturligt slående farve; vendbare brædder
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Størrelse:</strong></td>
                                                                                <td align="left">ca. 23 * 146 mm</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Længde:</strong></td>
                                                                                <td align="left">ca. 3.6 m</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Krav:</strong></td>
                                                                                <td align="left">ca. 6.70 meter til 1 m²
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Vægt:</strong></td>
                                                                                <td align="left">ca. 2.45 kg / m</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Bjælkespændvidde:</strong></td>
                                                                                <td align="left">30 cm c / c til boliger *</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <div className="row section-space--top--60">

                                                                <Grid container spacing={3}>
                                                                        <Grid item xs={6} sm={3} lg={4}>
                                                                            <a target="_blank" href="/bestall-prov" className="thm-btn" >Prøveordre</a>
                                                                        </Grid>
                                                                        {/* <Grid item xs={6} sm={3} lg={6}>
                                                                            <a target="_blank" href="/pdfs/classic-deck-english.pdf" className="thm-btn">Installationsguide</a>
                                                                        </Grid>
                                                                        <Grid item xs={8} sm={6} lg={8}>
                                                                        <a target="_blank" href="/pdfs/classic-deck-english-aluminim-trim.pdf" className="thm-btn" >aluminium installation</a>
                                                                    </Grid> */}
                                                                    </Grid>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/*====================  End of Smart Classic Section-2 content  ====================*/}


                                                {/*====================  Star Smart Classic Section-4 content ====================*/}
                                                <div className="col-lg-12 mb-80">
                                                    <div className="project-gallery-wrapper">
                                                        <div className="row">
                                                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                                                                <div className="project-details">
                                                                    <h2 className="mb-40 mt-20"><strong>produkt information</strong></h2>
                                                                    <h3>Farvevalg</h3>
                                                                    <p>
                                                                        Studiefotografering og / eller din browserenhed giver muligvis ikke en nøjagtig gengivelse af farverne. For at se farverne personligt, bedes du anmode om gratis prøver.
                                                                    </p>
                                                                    <h3>Naturlige skønhed</h3>
                                                                    <p>
                                                                        Vores produkter er designet til at ligne naturligt træ og kan have svag farve / struktur og skygge variationer fra plade til plade. Farvevariationen vil på ingen måde påvirke produktets ydeevne.</p>
                                                                    <h3>Oprethold skønheden</h3>
                                                                    <p>
                                                                        Alle udvendige overflader opsamler snavs, støv og forurenende stoffer og skal rengøres. Det er nødvendigt at rengøre dit kompositdæk med jævne mellemrum for at holde det så smukt som den dag, du installerede det.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                                                                <div className="project-details">
                                                                    <h2 className="mb-40 mt-20"><strong>Pålidelig holdbarhed, overlegen kvalitet</strong></h2>
                                                                    <ul>
                                                                        <li><strong>1. </strong>Installeret med HidLoc ™ skjulte fastgørelseselementer for at skabe ensartet overflade, hvilket gør det mere sikkert og behageligt for familier med børn og kæledyr.</li>
                                                                        <li><strong>2. </strong>Flerfarvede striber på hvert bræt skaber et autentisk kornmønster, der inviterer dig til at slappe af og nyde dit personlige tropiske paradis.</li>
                                                                        <li><strong>3. </strong>Karakteristisk indlægsdesign, stil og farveindstillinger</li>
                                                                        <li><strong>4. </strong>Der kræves ingen årlig farvning, forsegling eller maling</li>
                                                                        <li><strong>5. </strong>Ekstraordinær modstandsdygtighed over for UV-lys og farvetone</li>
                                                                        <li><strong>6. </strong>Høj skridsikkerhed giver en sikker overflade, selv i våd tilstand</li>
                                                                        <li><strong>7. </strong>Ekstremt lav vandabsorption</li>
                                                                        <li><strong>8. </strong>Fri for giftige tilsætningsstoffer</li>
                                                                        <li><strong>9. </strong>Velegnet til offentlig og privat sektor</li>
                                                                        <li><strong>10. </strong>Splinter ikke, splittes, rådner eller kriger</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*====================  End of Smart Classic Section-4 content  ====================*/}

                                             

                                                {/*====================  Star Smart Classic Section-6 content  ====================*/}
                                                {/* <div className="col-12 mb-30 mt-80" >
                                                    <h3>
                                                        Ladda ner Pdfs</h3>
                                                    <hr />

                                                    <Grid container spacing={3}>
                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="/pdfs/Broschyr-SV.pdf">
                                                                <img src={pdfimg1} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>

                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="/pdfs/Everdeck/everdeck-swedish-with-aluminum-trims.pdf">
                                                                <img src={pdfimg4} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>

                                                        <Grid item xs={6} sm={2}>

                                                        </Grid>

                                                    </Grid>
                                                </div> */}
                                                {/*====================  End of Smart Classic Section-6 content  ====================*/}


                                            </div>
                                        </div>
                                    </div>
                                    {/*Projects section end*/}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </Layout>
        </>
    );
};

export default everdeck;
