import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/SAPPHIREKomposittrall.webp";


import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const sapphirekomposittrall = () => {
  return (
    <Layout pageTitle="sapphire-terrassebrædder">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Sapphire-terrassebrædder" crumbTitle="sapphire-terrassebrædder" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper pt-40 pb-40">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Smart Classic Section-1 content ====================*/}
                      <div className="col-lg-12 col-12 mb-60 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>SAPPHIRE ™ Komposit Terrassebrædder</h2>
                          <strong>hjemme er hvor du føler dig komfortabel og afslappet
                          </strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Inspireret af det traditionelle trædæk præget af æstetik, holdbarhed og funktionalitet.
                              </strong>
                              <p>Med et traditionelt trædækningsudseende og lang levetid er vores SAPPHIRE ™ kompositdæk et attraktivt alternativ til træplankematerialer. Med et så overraskende overkommeligt alternativ er der simpelthen ingen grund til at nøjes med farvning, forsegling, splinter og konstant vedligeholdelse. Høj skridsikker elegant, ribbet / rillet børstet overflade muliggør god trækkraft i våde områder som f.eks. Omkring bassiner, de er sikre at gå på med bare fødder.
                              </p>
                              <p>Med et æstetisk skandinavisk designudseende har vores Sapphire ™ kompositplanker været de mest solgte planker i mere end 10 år og er stadig i dag.
                              </p>
                              <div>
                                <ul>
                                  <li><strong>Premium kvalitet</strong> – Bevist nordisk kvalitetsdæk til hårdt vejr og grønnere ophold.</li>
                                  <li><strong>Ensartethed </strong>– HidLo™ dolda fästelement säkerställer en slät och enhetlig yta som är säker att gå på.</li>
                                  <li><strong>Gratis tilbehør</strong> Komplet dine drømmende terrassedækdesign med vores fascia-trim og betræk – det perfekte match til din højtydende SAPPHIRE™ pyntede.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-1 content  ====================*/}

                      {/*====================  Star Smart Classic Section-2 content  ====================*/}
                      <div className="col-lg-12 mb-60">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">

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
                                      <td align="left">Skridsikre rillede overflader, autentiske og naturlige træfarver; vendbare brædder
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Størrelse:</strong></td>
                                      <td align="left">ca. 25 * 150 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Længde:</strong></td>
                                      <td align="left">ca. 4.8 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Krav:</strong></td>
                                      <td align="left">ca. 6.5 meter til 1 m²
                                      </td>
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

                      {/*====================  Star Smart Classic Section-5 content ====================*/}
                      {/* <div className="col-12 mb-20">
                        <h3>TILLBEHÖR</h3>
                        <hr />
                        <p className="mb-40">Green Plank SMART ™ -täcknings tillbehör utvidgar dina horisonter ytterligare, så att du kan bygga ut distinkta och förtjusande funktioner i ditt SMART ™ -trall som förbättrar både dess skönhet och funktionalitet. Från F-trim och L-trim till stige rörelser, ventilerade aluminium lister, trall pedaler, balk, etc., här är alla trall delar du behöver för att slutföra ditt SMART ™ trall projekt.</p>

                      </div> */}
                      {/*====================  End of Star Smart Classic Section-5 content  ===============*/}


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

export default sapphirekomposittrall;
