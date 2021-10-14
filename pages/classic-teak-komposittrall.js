import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/products/innerPages/Komposittrall/CLASSICKomposittrall.webp";

import Imagecolor1 from "../assets/images/colors/classicteak/Classic-Beach-Grey-Narrow-Groove-200x200.png";
import Imagecolor2 from "../assets/images/colors/classicteak/classic-beach-grey-wide-groove-200x200.png";
import Imagecolor3 from "../assets/images/colors/classicteak/Classic-Charcoal-Narrow-Groove-200x200.png";
import Imagecolor4 from "../assets/images/colors/classicteak/Classic-Charcoal-Wide-Groove-200x200.png";
import Imagecolor5 from "../assets/images/colors/classicteak/Classic-Chocolate-Narrow-Groove-200x200.png";
import Imagecolor6 from "../assets/images/colors/classicteak/Classic-Chocolate-Wide-Groove-200x200.png";
import Imagecolor7 from "../assets/images/colors/classicteak/Classic-Teak-Narrow-Groove-200x200.png";
import Imagecolor8 from "../assets/images/colors/classicteak/Classic-Teak-Wide-Groove-200x200.png";

import Imagesurface from "../assets/images/surface/Asset-92-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";
import pdfimg6 from "../assets/images/projects/greenplank-composite-decking-installation-guide-1.jpg";

import Head from "next/head";
import Grid from '@material-ui/core/Grid';
import Footer from "../components/footer";

const classicTeak = () => {
    return (
        <>
            <Head>
                <title>Classic terrassebrædder</title>
                <meta name="title" content="Classic terrassebrædder - GreenPlank.se" />
                <meta name="description" content="CLASSIC terrassebrædder inspirerad av den skandinaviska designtraditionen, som kännetecknas av estetik, enkelhet och funktionalitet." />
            </Head>
            <Layout pageTitle="classic-teak-terrassebrædder">
                <HeaderTwo />
                <StickyHeader />
                <PageHeader title="Classic-teak-terrassebrædder" crumbTitle="classic-teak-terrassebrædder" />
                <section className="blog-details pt-120 pb-40">
                    <Container>
                        <Row>
                            <Col md={12} lg={12}>
                                <div className="page-wrapper section-space--inner--120">
                                    {/*Smart Classic section start*/}
                                    <div className="project-section">
                                        <div className="container">
                                            <div className="row">

                                                {/*====================  Star Smart Classic Section-1 content ====================*/}
                                                <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                                                    <div className="project-details">
                                                        <h2>CLASSIC ™ kompositdæk</h2>
                                                        <strong>hjemme er hvor du føler dig komfortabel og afslappet
                                                        </strong>
                                                        <div class="et_pb_text_inner">
                                                            <div class="ce_text block">

                                                                <strong>Inspireret af den skandinaviske designtradition præget af æstetik, enkelhed og funktionalitet.
                                                                </strong>
                                                                <p>Med Green Plank CLASSIC ™ naturlige fibre kompositplanker kan du skabe et udendørs rum, der er perfekt til din hjemmestil, der også er let at rengøre og passe på. Med et så overraskende overkommeligt alternativ er der simpelthen ingen grund til at nøjes med farvning, forsegling, splinter og konstant vedligeholdelse. Høj skridsikker elegant, ribbet / rillet børstet overflade muliggør god trækkraft i våde områder som f.eks. Omkring bassiner, de er sikre at gå på med bare fødder.
                                                                </p>
                                                                <p>Med et æstetisk skandinavisk designudseende har vores Classic ™ kompositplanker været de mest solgte planker i mere end 10 år og er stadig i dag.
                                                                </p>

                                                                <div>

                                                                    <strong>Premium kvalitet</strong> – Bevist nordisk kvalitetsdæk til hårdt vejr og grønnere ophold.<br />
                                                                    <strong>Ensartethed</strong>– HidLoc™ dolda fästelement säkerställer en slät och enhetlig yta som är säker att gå på.<br />
                                                                    <strong>Gratis tilbehør</strong> Komplet dine drømmende terrassedækdesign med vores fascia-trim og betræk – det perfekte match til din højtydende CLASSIC ™ pyntede.<br />

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
                                                            <div className="col-md-6 col-mobile-6 section-space--bottom--20">
                                                                <div className="single-gallery-project">
                                                                    <div className="single-gallery-project__image">
                                                                        <img src={Image1} className="img-fluid" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-mobile-6 mb-20">
                                                                <div className="project-information" >
                                                                    <h3>Produkt information</h3>
                                                                    <table width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left"><strong>Overflade:</strong></td>
                                                                                <td align="left">Skridsikre rillede overflader, autentiske og naturlige træfarver; vendbare brædder
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Størrelse:</strong></td>
                                                                                <td align="left">ca. 25 * 135 mm</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Længde:</strong></td>
                                                                                <td align="left">ca, 3,8 och 4,8 L/M</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Krav:</strong></td>
                                                                                <td align="left">ca. 7.10 meter til 1 m²</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Vægt:</strong></td>
                                                                                <td align="left">ca. 2.82 kg / m</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left"><strong>Bjælkespændvidde:</strong></td>
                                                                                <td align="left">50 cm c / c til boliger *</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                {/* </div> */}
                                                                <div className="row mt-40 mb-30">

                                                                    <div className="row" style={{ marginTop: ".5em", marginRight: "8px", marginLeft: "4px" }}>
                                                                        <img src={Imagesurface} />
                                                                    </div>


                                                                </div>
                                                                <div className="row mt-60">

                                                                    <Grid container spacing={3}>
                                                                        <Grid item xs={6} sm={3} lg={4}>
                                                                            <a target="_blank" href="/bestall-prov" className="thm-btn" >Prøveordre</a>
                                                                        </Grid>
                                                                        <Grid item xs={6} sm={3} lg={6}>
                                                                            <a target="_blank" href="/pdfs/classic-deck-english.pdf" className="thm-btn">Installationsguide</a>
                                                                        </Grid>
                                                                        <Grid item xs={8} sm={6} lg={8}>
                                                                        <a target="_blank" href="/pdfs/classic-deck-english-aluminim-trim.pdf" className="thm-btn" >aluminium installation</a>
                                                                    </Grid>
                                                                    </Grid>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/*====================  End of Smart Classic Section-2 content  ====================*/}

                                                {/*====================  Star Smart Classic Section-3 content  ====================*/}

                                                <div className="col-12 mb-80">
                                                    <h3>VISA FÄRGTRENDS - ingrodd med naturlig och distinkt karaktär</h3>
                                                    <hr />
                                                    <Grid container spacing={3}>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project__image">
                                                                <img src={Imagecolor1} className="img-fluid" alt="" />
                                                                <h4 className="mt-20 text-center">Beach Grey Narrow-Groove</h4>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project__image">
                                                                <img src={Imagecolor2} className="img-fluid" alt="" />
                                                                <h4 className="mt-20 text-center">Beach Grey Wide-Groove</h4>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project__image">
                                                                <img src={Imagecolor3} className="img-fluid" alt="" />
                                                                <h4 className="mt-20 text-center">Charcoal Narrow-Groove</h4>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project__image">
                                                                <img src={Imagecolor4} className="img-fluid" alt="" />
                                                                <h4 className="mt-20 text-center">Charcoal Wide-Groove</h4>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project">
                                                                <div className="single-gallery-project__image">
                                                                    <img src={Imagecolor5} className="img-fluid" alt="" />
                                                                    <h4 className="mt-20 text-center">Chocolate Narrow-Groove</h4>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project">
                                                                <div className="single-gallery-project__image">
                                                                    <img src={Imagecolor6} className="img-fluid" alt="" />
                                                                    <h4 className="mt-20 text-center">Chocolate Wide-Groove</h4>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project">
                                                                <div className="single-gallery-project__image">
                                                                    <img src={Imagecolor7} className="img-fluid" alt="" />
                                                                    <h4 className="mt-20 text-center">Teak Narrow-Groove</h4>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <div className="single-gallery-project">
                                                                <div className="single-gallery-project__image">
                                                                    <img src={Imagecolor8} className="img-fluid" alt="" />
                                                                    <h4 className="mt-20 text-center">Teak Wide-Groove</h4>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </div>

                                                {/*====================  End of Smart Classic Section-3 content  ====================*/}

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

                                                {/*====================  Star Smart Classic Section-5 content ====================*/}
                                                <div className="col-12 mb-80">

                                                    <Grid container spacing={3}>
                                                        <Grid item xs={12} sm={4}>
                                                            <iframe width="360" height="315" src="https://www.youtube.com/embed/sYQVb4_tHoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <iframe width="360" height="315" src="https://www.youtube.com/embed/oSyrH7w1qA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <iframe width="360" height="315" src="https://www.youtube.com/embed/64fzJKs0DSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                                {/*====================  End of Star Smart Classic Section-5 content  ===============*/}

                                                {/*====================  Star Smart Classic Section-6 content  ====================*/}
                                                <div className="col-12 mb-30 mt-20" >
                                                    <h3>
                                                        Download Pdfs
                                                    </h3>
                                                    <hr />

                                                    <Grid container spacing={3}>
                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="/pdfs/greenplank-natural-fibers-compsoite-products-brochure-2020-english.pdf">
                                                                <img src={pdfimg1} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="/pdfs/classic-deck-english.pdf">
                                                                <img src={pdfimg6} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="/pdfs/Green-Plank-Composite-Decking-hollow-boards-Installation-Guide-2019%20(2).pdf">
                                                                <img src={pdfimg6} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="/pdfs/classic-deck-english-aluminim-trim.pdf">
                                                                <img src={pdfimg6} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>
                                                            <a target="_blank" href="/pdfs/greenplank-datasheet-classic-composite-decking-en.pdf">
                                                                <img src={pdfimg5} className="img-fluid" alt="" />
                                                            </a>
                                                        </Grid>
                                                        <Grid item xs={6} sm={2}>

                                                        </Grid>

                                                    </Grid>
                                                </div>
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

export default classicTeak;
