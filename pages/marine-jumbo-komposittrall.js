import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/marinejumbo/BeachGrey_thumbnail.webp";

import Imagecolor1 from "../assets/images/colors/marine_jumbo/Teak.png";
import Imagecolor2 from "../assets/images/colors/marine_jumbo/Beach-Grey.png";
import Imagecolor3 from "../assets/images/colors/marine_jumbo/Red-Cherry.png";


import Imagesurface from "../assets/images/surface/marine_jumbo/MarineJumbo-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";
import pdfimg6 from "../assets/images/projects/greenplank-composite-decking-installation-guide-1.jpg";
import Footer from "../components/footer";
import Head from "next/head";

const marinejumbokomposittrall = () => {
  return (
    <Layout pageTitle="marine-jumbo-terrassebrædder">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="marine-jumbo-terrassebrædder" crumbTitle="marine-jumbo-terrassebrædder" />
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
                          <h2>MARINE JUMBO ™ Heavy Duty kommerciel kompositdæk
                          </h2>
                          <strong>tidløs elegance til højere krav – PVC-fri!
                          </strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Green Plank MARINE JUMBO ™ er inspireret af naturens styrke, understøttet af beviser, og er det bredeste vendbare Heavy Duty kompositplank på markedet, der bruges af nordiske kommuner. Det er bygget til at vare som et træalternativ under ekstreme nordiske vejrforhold.
                              </strong>
                              <p>
                                Det tunge MARINE JUMBO ™ naturlige fiber kompositplanker er specielt udviklet til kommercielle kompositplankeapplikationer. Det er perfekt til offentlige steder med tungt brug som forlystelsesparker, stadioner, strandpromenade, lystbådehavne og hoteller. Dens robuste, barfodsvenlige overflade og et traditionelt og elegant look leverer årtier med holdbar ydelse med lav vedligeholdelse. Med vendbare ribbet / rillede børstede overflader, forbedret skridsikkerhed og langvarig ydelse er vores MARINE JUMBO ™ kompositplade det professionelle valg til kommercielle projekter.
                              </p>
                              <p>Høj skridsikker, ribbet / rillet børstet overflade i europæisk stil muliggør god trækkraft i våde områder såsom omkring bassiner, promenader, de er sikre at gå på med bare fødder.<br />

                                Ligesom ægte træplader kan vores MARINE JUMBO ™ kompositplanker slibes eller saves til enhver ønsket form uden at miste pyntebrættets ægte træeffekt.</p>
                              <div>
                                <ul>
                                  <li><strong>Premium kvalitet</strong> – Bevist nordisk kvalitetsdæk til hårdt vejr og grønnere ophold.</li>
                                  <li><strong>Ensartethed</strong> – HidLoc ™ skjulte dækfastgørelser sikrer en glat og ensartet overflade, der er sikker at gå på.</li>
                                  <li><strong>Gratis tilbehør </strong>– Komplet dine drømmende terrassedækdesign med vores fascia-trim og betræk – det perfekte match til din højtydende  MARINE JUMBO™ pyntede.</li>
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
                                  {/* <img src="assets/img/projects/img12.PNG" className="img-fluid" alt="" /> */}
                                  <img src={Image11} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information">
                                <h3>Produktinformation</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Overflade:</strong></td>
                                      <td align="left">Skridsikker ribbet med en plan finish på bagsiden, tropisk hårdttræ; vendbare brædder
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Størrelse:</strong></td>
                                      <td align="left">ca. 31 * 225 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Længde:</strong></td>
                                      <td align="left">ca. 2.8 m, 3.6 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Krav:</strong></td>
                                      <td align="left">ca. 4.40 meter til 1 m²
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Krav:</strong></td>
                                      <td align="left">ca. 9.00 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Bjælkespændvidde:</strong></td>
                                      <td align="left">60 cm c / c til boliger *</td>
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
                                  {/* <Grid item xs={6} sm={3} lg={6}>
                                    <a target="_blank" href="/pdfs/smart-Capped-English.pdf" className="thm-btn"  >Installationsguide</a>
                                  </Grid> */}
                                  <Grid item xs={8} sm={6} lg={8}>
                                    <a target="_blank" href="/pdfs/marine-jumbo-english-with-aluminum-trims.pdf" className="thm-btn" >aluminium installation</a>
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
                        <h3>VIS FARVETENDENS – indgroet med naturlig og særpræg</h3>
                        <hr />
                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor3} className="img-fluid" alt="" />
                              <h4 className="section-space--top--20 text-center">Red Cherry</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor1} className="img-fluid" alt="" />
                              <h4 className="section-space--top--20 text-center">Teak</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="section-space--top--20 text-center">Beach Grey

                              </h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
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
                          {/* <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/smart-Capped-English.pdf">
                              <img src={pdfimg6} className="img-fluid" alt="" />
                            </a>
                          </Grid> */}
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Green-Plank-Composite-Decking-hollow-boards-Installation-Guide-2019%20(1).pdf">
                              <img src={pdfimg6} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/marine-jumbo-english-with-aluminum-trims.pdf">
                              <img src={pdfimg6} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/greenplank-datasheet-marine-jumbo-composite-decking-en.pdf">
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
  );
};

export default marinejumbokomposittrall;
