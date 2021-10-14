import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

import image1 from "../assets/images/installation/smart-Marine-swedish-01.jpg";
import image2 from "../assets/images/installation/greenplank-brochure-title-1.jpg";
import image3 from "../assets/images/installation/smart-classic-deck-swedish-01.jpg";
import image4 from "../assets/images/installation/smart-regular-Swedish-01.jpg";
import image5 from "../assets/images/installation/smart-Capped-swedish-01.jpg";
import image6 from "../assets/images/installation/img_265949.png";
import image7 from "../assets/images/installation/0001-scaled.jpg";
import image8 from "../assets/images/installation/0001-2-scaled.jpg";
import image9 from "../assets/images/installation/img_265949.png";

const InstallationUnderhall = () => {
  return (
    <>
      <Head>
        <title>Installationer og vedligeholdelse</title>
        <meta name="title" content="Installation och underhåll | Hjälp och guider - GreenPlank.se" />
        <meta name="description" content="Green Plank installationsguider och video kan hjälpa dig att korrekt installera kompositplattor, klädsel, stängsel och räcke med lätthet." />
      </Head>
      <Layout pageTitle="Installationer og vedligeholdelse">
        <HeaderTwo />
        <PageHeader title="Installationer og vedligeholdelse" crumbTitle="Installationer og vedligeholdelse" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>SÅDAN INSTALLERES KOMPOSITT DECKING, FACADE CLADDING, FENCING & PLANKS
                </h2>
                <div className="mb-30">
                  <p>Sikrer ro i sindet, at dit sammensatte terrassegulv, facade eller hegn ser ud og fungerer, som det skal.</p>
                  <p className="mb-30 mt-30">Korrekt installation og vedligeholdelse er afgørende for at bringe din vision til live og sikre dine sammensatte dækgulve, facadebeklædning og hegnprodukter ‘naturlige skønhed og levetid. Følgende installationsvejledninger og vedligeholdelsesinstruktioner hjælper dig med at komme i gang, mens vores vejledningsvideoer giver et nærbillede af det grundlæggende. Uanset om du er en professionel installatør eller en facilitetschef, har Green Plank ressourcerne til at støtte dig under hvert trin i installations- og vedligeholdelsesprocessen.</p>
                  <p className="mb-30 mt-30">Vælg den type installations- og vedligeholdelsesinstruktioner, du er interesseret i, så du kan se dem på din skærm eller downloade dem til din computer. Hvis du ikke finder de oplysninger, du leder efter, kan du besøge vores FAQs-side eller sende os en e-mail på info@GreenPlank.dk.</p>

                  <div class="table-1">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ textAlign: "left" }}>Products</th>
                          <th style={{ textAlign: "left" }}>Simple Installation Guide	</th>
                          <th style={{ textAlign: "left" }}>Detail Installation Guide</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "left" }}>Smart™ Marine</td>
                          <td><a target="_blank" href="/pdfs/SmartMarine/smart-Marine-English.pdf"><img class="wp-image-10058 aligncenter" src={image1} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Smart-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Smart™ Classic</td>
                          <td><a target="_blank" href="/pdfs/smart-classic-deck-english.pdf"><img class="wp-image-10058 aligncenter" src={image3} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Smart-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Smart™ Regular</td>
                          <td><a target="_blank" href="/pdfs/SmartRegular/smart-regular-english.pdf"><img class="wp-image-10058 aligncenter" src={image4} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Smart-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Smart™ Capped</td>
                          <td><a target="_blank" href="/pdfs/SmartCapped/smart-Capped-English.pdf"><img class="wp-image-10058 aligncenter" src={image5} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Smart-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>DECK CARE AND CLEANING</td>
                          <td><img class="wp-image-10063 aligncenter" src={image6} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/English-language_compressed.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Marine 40™</td>
                          <td><a target="_blank" href="/pdfs/Marine40™/marine-40.pdf"><img class="wp-image-10063 aligncenter" src={image7} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Marine 60™</td>
                          <td><a target="_blank" href="/pdfs/Marine60™/marine-60.pdf"><img class="wp-image-10063 aligncenter" src={image7} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Classic™ Komposittrall</td>
                          <td><a target="_blank" href="/pdfs/ClassicKomposittrall/classic-deck-english.pdf"><img class="wp-image-10063 aligncenter" src={image8} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/ClassicKomposittrall/Green-Plank-Composite-Decking-hollow-boards-Installation-Guide-2019%20(1).pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>ENTRA™ Composite Decking</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Entra-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>PRIMACAP™ Facade Cladding</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/Novoclad/green-plank-primacap-facade-cladding-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Novofence Private™</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/NovofencePrivate™/green-plank-privacy-fence-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Novofence Traditional™</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/NovofenceTraditional™/green-plank-traditional-fence-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Novofence Modern™</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/NovofenceModern™/green-plank-modern-fence-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>InstaClick™/EverTile™ Deck Tiles</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/golvplattor/green-plank-deck-tiles-installation-guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mb-30 mt-60">Green Plank SmartCap & Smart Wood Komposit Terrassebrædder with Tongue & Groove Installationsvejledning – Ingen clips krævet Grøn planke (rektangulær) Installationsvejledning til trækompositplader</p>
                  <h3 className="mb-30 mt-30">ANSVARSFRASKRIVELSE:</h3>
                  <p className="mb-30 mt-10">Alt indhold, publikationer og litteratur på denne side er kun til orientering. Disse oplysninger bør ikke betragtes som komplette, ajourførte og er ikke beregnet til at blive brugt i stedet for et besøg, konsultation eller rådgivning fra en autoriseret professionel.</p>
                  <p className="mb-30 mt-10">Disse publikationer og al litteratur, der findes på dette websted, er beskyttet af ophavsret, og tilladelse skal fås fra udgiveren inden reproduktion, opbevaring i et hentningssystem eller transmission i enhver form eller på nogen måde, elektronisk, mekanisk, fotokopiering, optagelse, eller det samme. Ved at downloade indhold, publikation og / eller litteratur fra dette websted accepterer du fremgangsmåden beskrevet i brugsbetingelserne.</p>
                 
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

export default InstallationUnderhall;
