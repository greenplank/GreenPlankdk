import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";

import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/smartmarine/BeachGrey_Thumbnail.webp";
import Head from "next/head";
import Imagecolor1 from "../assets/images/colors/smart_marine/Beach-Grey.png";
import Imagecolor2 from "../assets/images/colors/smart_marine/Chocolate.png";
import Imagecolor3 from "../assets/images/colors/smart_marine/Teak.png";
import Imagecolor4 from "../assets/images/colors/smart_marine/Charcoal.png";


import Imagesurface from "../assets/images/surface/smart_marine/Smart-Marine-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";
import pdfimg6 from "../assets/images/projects/greenplank-composite-decking-installation-guide-1.jpg";


import Footer from "../components/footer";

const smartmarine = () => {
  return (
    <Layout pageTitle="smart-terrassebrædderl-smart-marine">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Smart-terrassebrædder-smart-marine" crumbTitle="smart-marine" />
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
                          <h2>SMART ™ Terrassebrædder system – Smart Marine ™</h2>
                          <strong>utroligt valg med utrolig skønhed og skræddersyet til ultra ydeevne</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>På grund af det unikke sammenlåsningssystem, hulfri overflade, er SMART ™ Decking System et godt valg for familier. Det er designet til maksimal holdbarhed. Det modstår falmning, pletter, skimmelsvamp og vil ikke rådne, knække eller vride sig. Det er også insektsikkert og splintfrit, hvilket gør det sikrere og mere behageligt for familier med børn og kæledyr.</strong><br/>
                              Med en solid kerne, glat og elegant overflade er SMART Marine ™ kompositplader utroligt stærke, holdbare, holdbare og giver et jævnt, naturligt landskab. SMART Marine ™ kompositplanker er sikre at gå på med bare fødder.<br/>
                              Vores SMART Marine ™ pyntede er inspireret af naturlige mineraler og jordpigmenter. Farvepaletten er rig og levende – og foretrækkes af husejere og arkitekter frem for andre pyntematerialer. Hver omhyggeligt formuleret skygge inkluderer attraktive multikromatiske toner og striber.<br/>
                              SMART Marine ™ kompositplader installeres uden klips og fastgøres til bjælkerne ved hjælp af skruer gennem de præfabrikerede lange fastgørelses- og drænhuller.<br/>
                              Ved at bruge SMART ™ Decking System kan du oprette en helt lukket terrasseoverflade, der ikke tillader snavs at falde ned eller ukrudt vokse op.<br/>
                              <div>
                              <ul>
                                  <li><strong>Premium kvalitet</strong> – Bevist nordisk kvalitetsdæk til hårdt vejr og grønnere ophold.</li>
                                  <li><strong>Ingen klip</strong> – Du har ikke brug for klips til fastgørelse af dæk til at montere vores sammensatte tunge og rilleplank.</li>
                                  <li><strong>Ensartethed  </strong>– Vores sammensatte tunge- og notdæk giver meget ensartede og glatte overflader.</li>
                                  <li><strong>Nem installation</strong> – Installation af vores kompositplanker er også let, brættet klikker let på plads uden bekymring for jævn afstand mellem brædderne.</li>
                                  <li><strong>Præfabrikerede huller</strong> – Vores tunge- og rilleplanker kommer med præfabrikerede huller, så du nemt og let kan fastgøre pladerne på plads uden risiko for forskydning eller bevægelse.</li>
                                  <li><strong>Gratis tilbehør</strong>  – Komplet dine drømme terrassedækdesign med vores ventilerede pynt og betræk – det perfekte match til din højtydende SMART ™ pyntede.</li>
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
                                <h3>Produkt information</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Overflade:</strong></td>
                                      <td align="left">Rige, træfarvede farver, skridsikker</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Størrelse:</strong></td>
                                      <td align="left">ca. 22 * 138 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Længde:</strong></td>
                                      <td align="left">ca. 2.8 m | 3.8 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Krav:</strong></td>
                                      <td align="left">ca. 6.45 meters for 1 m²</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vægt:</strong></td>
                                      <td align="left">ca. 3.45 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Bjælkespændvidde:</strong></td>
                                      <td align="left">	50 cm c / c til boliger *</td>
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
                                    <a target="_blank" href="/pdfs/smart-Marine-English.pdf" className="thm-btn"  >Installationsguide</a>
                                  </Grid>
                                  <Grid item xs={8} sm={6} lg={8}>
                                    <a target="_blank" href="/pdfs/smart-Marine-English%20(1).pdf" className="thm-btn" >aluminium installation</a>
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
                              <img src={Imagecolor1} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Beach Grey</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Chocolate</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor3} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Teak</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor4} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Charcoal</h4>
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
                                <h2 className="mb-40 mt-20"><strong>Vær smart – Køb SMART ™</strong></h2>
                                <ul>
                                  <li><strong>1. </strong>Gapfri, ensartet overflade, der gør den sikrere og mere behagelig for familier med børn og kæledyr.</li>
                                  <li><strong>2. </strong>Flerfarvede striber på hvert bræt skaber et autentisk kornmønster, der inviterer dig til at slappe af og nyde dit personlige tropiske paradis.</li>
                                  <li><strong>3. </strong>Karakteristisk indlægsdesign, stil og farveindstillinger</li>
                                  <li><strong>4. </strong>Der kræves ingen årlig farvning, forsegling eller maling</li>
                                  <li><strong>5. </strong>Ekstraordinær modstandsdygtighed over for UV-lys og farvetone</li>
                                  <li><strong>6. </strong>Høj skridsikkerhed giver en sikker overflade, selv i våd tilstand</li>
                                  <li><strong>7. </strong>KIngen fastgørelsesklip kræves</li>
                                  <li><strong>8. </strong>Fri for giftige tilsætningsstoffer</li>
                                  <li><strong>9. </strong>Velegnet til offentlig og privat sektor</li>
                                  <li><strong>10. </strong>Op til 60% hurtigere installation</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-4 content  ====================*/}

                      {/*====================  Star Smart Classic Section-5 content ====================*/}
                      <div className="col-12 mb-80">
                        <h3>TILBEHØR</h3>
                        <hr />
                        <p className="mb-40">Green Plank SMART t dækningstilbehør udvider din horisont yderligere, så du kan udvide særprægede og dejlige funktioner til dit SMART træk, der forbedrer både dets skønhed og funktionalitet. Fra F-trim og L-trim til stigebevægelser, ventilerede aluminiumslister, vognpedaler, bjælker osv., Her er alle de vogndele, du har brug for for at fuldføre dit SMART-vognprojekt.</p>

                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/aCm2kWRYqvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/803lQ8m7aVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                          </Grid>
                        </Grid>
                      </div>
                      {/*====================  End of Star Smart Classic Section-5 content  ===============*/}

                         {/*====================  Star Smart Classic Section-6 content  ====================*/}
                         <div className="col-12 mb-30 mt-20" >
                        <h3>
                        Download Pdfs</h3>
                        <hr />

                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/greenplank-natural-fibers-compsoite-products-brochure-2020-english.pdf">
                              <img src={pdfimg1} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/smart-Marine-English.pdf">
                              <img src={pdfimg6} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Green-Plank-Composite-Decking-hollow-boards-Installation-Guide-2019.pdf">
                              <img src={pdfimg6} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/smart-Marine-English%20(1).pdf">
                              <img src={pdfimg6} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/greenplank-datasheet-smart-composite-decking-en.pdf">
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

export default smartmarine;
