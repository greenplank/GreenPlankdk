import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BrandCarousel from "../components/brand-carousel";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BliCertifieradHantverkare = () => {
  return (
    <>
      <Head>
        <title>Deltag i vores team af certificerede installatører</title>
        <meta name="title" content="Deltag i vores team af certificerede installatører - GreenPlank.dk" />
        <meta name="description" content="Vårt professionella installationsprogram delar avancerad installationsteknik bland skickliga installatörer" />
      </Head>
      <Layout pageTitle="Bliv en grøn installatør">
        <HeaderTwo />
        <PageHeader title="Bliv en grøn installatør" crumbTitle="bli-en-certifierad" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Deltag i vores team af certificerede installatører</h2>
                <div className="mb-30">
                <h3 className="mb-30 mt-30">Hos Green Plank handler det om partnerskaber, vores forretning bygger din!</h3>
                  <p>Opdag hvordan Green Plank kan hjælpe med at styrke din forretning og markedsandel med vores banebrydende marketingværktøjer, leadgenerering, praktisk træning og support. Bliv go-to-professional i dit samfund i dag!</p>
                  <h3 className="mb-30 mt-30">Et loyalitetsprogram, der faktisk bygger din virksomhed</h3>
                  <p className="mb-30 mt-30">Som et af verdens største pyntemærker tilbyder Green Plank belønninger til forretningsopbygning til sine velkvalificerede partnere. Green PlankPro finder et installatør i nærheden af ​​dig, der gør det let at øge din virksomheds eksponering med et tilpasset marketingprogram og vinde kunder med vores miljøvenlige produkter, holdbare og vedligeholdelsesprodukter med høj kvalitet, der holder i høj kvalitet.</p>
                  <h3 className="mb-30 mt-30">Fem enkle trin for at blive certificeret Green Installer</h3>
                  

                  <strong>1. </strong>Send dine kontaktoplysninger til os via ansøgningsskema
                  <br />
                  <strong>2. </strong>Deltag i en træningssession om Green Plank Green Installer Loyalty Program
                  <br />
                  <strong>3. </strong>Byg tre Green Plank-dæk inden for 12 måneder efter indgivelse af din ansøgning, og registrer disse projekter på GreenPro.GreenPlank.dk
                  <br />
                  <strong>4. </strong>En Green Plank-repræsentant vil inspicere et af dine tre seneste projekter for korrekt installation af Green Plank-produkter.
                  <br />
                  <strong>5. </strong>pr. installation af Green Plank produkter.
                  <br />


                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mb-30 mt-30">
                        <h3 className="mb-30 mt-30 text-center">Silver</h3>
                        <p className="text-center">Byg 3 Green Plank dæk inden for 12 måneder efter indgivelse af din ansøgning og registrer disse projekter på GreenPro.GreenPlank.com</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mb-30 mt-30">
                        <h3 className="mb-30 mt-30 text-center">Gold</h3>
                        <p className="text-center">Byg 3 Green Plank dæk inden for 12 måneder efter indgivelse af din ansøgning og registrer disse projekter på GreenPro.GreenPlank.com 
                        Deltag i en gratis træningssession</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mb-30 mt-30">
                        <h3 className="mb-30 mt-30 text-center">Platinum</h3>
                        <p className="text-center">Byg 12 Green Plank dæk inden for 12 måneder efter indgivelse af din ansøgning og registrer disse projekter på GreenPro.GreenPlank.com
                        Deltag i en gratis træningssession</p>
                      </blockquote>
                    </Grid>
                  </Grid>


                  <p className="mb-30 mt-30">*Deltag i et gratis produktuddannelseskursus hvert andet år for at bevare medlemsniveauet. For at blive Green Installer skal du have ansvarsforsikring og underskrive Green Installer-aftalen.</p>

                  <div >
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Green Plank loyalitetsprogram fordele *</th>
                          <th>Silver</th>
                          <th>Gold</th>
                          <th>Platinum</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Prioriteret opkald fra Green Plank Customer Support</td>
                          <td>Next day</td>
                          <td>Next day</td>
                          <td>Same day</td>
                        </tr>
                        <tr>
                          <td>Prioriteret teknisk support</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Nem garantiregistrering</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Find en installationsliste på Green Plank-websteder **</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>Premium plats</td>
                        </tr>
                        <tr>
                          <td>Loyalitetspoint for hvert projekt, du registrerer</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Godkendt arbejdstøj af installatørmærket</td>
                          <td></td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Kontantrabat</td>
                          <td>10%</td>
                          <td>15%</td>
                          <td>20%</td>
                        </tr>
                        <tr>
                          <td>Gratis levering af varevogn</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Månedligt nyhedsbrev og tilbud</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <strong>1.</strong>* Vilkår og betingelser gælder.
                  <br />
                  <strong>2.</strong>* Minimum 3 projekter med Green Plank-produkter skal udføres om året og deltage i et gratis produktuddannelseskursus hvert andet år.
                  <br />

                  <h3 className="mb-30 mt-30">Er du interesseret i at blive Green Plank Certified   <strong>”Green Installer”?</strong>
                  </h3>
                  <p className="mb-30 mt-30">Vi vil meget gerne have dig til vores team! Klik på knappen nedenfor og udfyld registreringsformularen sammen med en kort oversigt over din oplevelse relateret til udendørs dæk, hegn og facadebygning.</p>

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

export default BliCertifieradHantverkare;
