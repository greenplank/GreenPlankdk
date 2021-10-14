import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/ultrasmart.webp";


import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const ultrasmart = () => {
  return (
    <Layout pageTitle="ultra-smart">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Ultra-smart" crumbTitle="ultra-smart" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper pb-40 pt-40">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Smart Classic Section-1 content ====================*/}
                      <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>ULTRA™ Smart</h2>
                          <strong>Med vores nye Smart Ultra får du en terrasse, der er 50% lettere og 25% stærkere end tidligere modeller.</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Smart Ultra er en solid profil lavet af træfiber og skum -PVC til en let og stærk terrasse, der fås i to farver: Coffee Brown og Nordic Sand.</strong>
                              <div>
                                <ul>
                                  <li>ASA-belægning gør den ridsefast og farvehurtig.</li>
                                  <li>Ingen vedligeholdelsesbrandmodstand.
                                  </li>
                                  <li>Høj skridsikkerhed, og vi tilbyder 30 års garanti for slid.</li>
                                  <li>Farven falmer ikke med sollys og farves ikke af vin, olie, kaffe eller andre væsker.
                                  </li>
                                </ul>
                                <p>Da dette er et Green Plank Smart -produkt, tilbyder det et problemfrit look med not og not, der gør installationer op til 60% hurtigere end normale kompositdæk.<br />
                                  Den er installeret med 50 cm c / c og giver en meget solid overflade, fordi den låser brædderne sammen.
                                </p>
                                <p>Ultra tilbyder en meget skridsikker overflade og er fuldstændig vandtæt, hvilket gør den meget velegnet til våde områder såsom omkring pools eller nær vandløb.
                                </p>
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
                                  <img src={Image11} className="img-fluid" alt="" />
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
                                      <td align="left">Skum -PVC med træfiber.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Længde:</strong></td>
                                      <td align="left">ca. 3 m | 6 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vægt:</strong></td>
                                      <td align="left">ca. 10 kg.</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Regelafstand
                                        :</strong></td>
                                      <td align="left">Ingen farveændring, ASA-indkapslet
                                        <br />(belægning) 50 cc
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
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
                                <h2 className="mb-40 mt-20"><strong>Nøglefunktioner i Ultra Smart -kompositdæk
                                </strong></h2>
                                <ul>
                                  <li><strong>1. </strong>30 års garanti
                                  </li>
                                  <li><strong>2. </strong>Let og solidt bræt
                                  </li>
                                  <li><strong>3. </strong>Pletbestandig, hovedsageligt fra vin og kaffe.
                                  </li>
                                  <li><strong>4. </strong>Problemfri overflade med vores patenterede kliksystem.
                                  </li>
                                  <li><strong>5. </strong>Ingen årlig maling, forsegling eller oliering er påkrævet.</li>
                                  <li><strong>6. </strong>Modstandsdygtighed over for UV -lys og farvedemping.</li>
                                  <li><strong>7. </strong>Fri for giftige tilsætningsstoffer.</li>
                                  <li><strong>8. </strong>op til 60% hurtigere installation sammenlignet med traditionelle dæk</li>
                                  <li><strong>9. </strong>WPC med træflis
                                  </li>
                                  <li><strong>10. </strong>Vælg det perfekte produkt til dig. Bestil i dag!
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">

                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-4 content  ====================*/}

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

export default ultrasmart;
